var fs = require('fs');
var path = require('path');

var gulp = require('gulp');

// Load all gulp plugins automatically
// and attach them to the `plugins` object
var plugins = require('gulp-load-plugins')();

// Temporary solution until gulp 4
// https://github.com/gulpjs/gulp/issues/355
var runSequence = require('run-sequence');
var eventStream = require('event-stream');

var pkg = require('./package.json');
var dirs = pkg['h5bp-configs'].directories;

// ---------------------------------------------------------------------
// | Helper tasks                                                      |
// ---------------------------------------------------------------------

gulp.task('archive:create_archive_dir', function () {
    fs.mkdirSync(path.resolve(dirs.archive), '0755');
});

gulp.task('archive:zip', function (done) {

    var archiveName = path.resolve(dirs.archive, pkg.name + '_v' + pkg.version + '.zip');
    var archiver = require('archiver')('zip');
    var files = require('glob').sync('**/*.*', {
        'cwd': dirs.dist,
        'dot': true // include hidden files
    });
    var output = fs.createWriteStream(archiveName);

    archiver.on('error', function (error) {
        done();
        throw error;
    });

    output.on('close', done);

    files.forEach(function (file) {

        var filePath = path.resolve(dirs.dist, file);

        // `archiver.bulk` does not maintain the file
        // permissions, so we need to add files individually
        archiver.append(fs.createReadStream(filePath), {
            'name': file,
            'mode': fs.statSync(filePath)
        });

    });

    archiver.pipe(output);
    archiver.finalize();

});

gulp.task('clean', function (done) {
    require('del')([
        dirs.archive,
        dirs.dist
    ], done);
});

gulp.task('copy', [
    'copy:vendor',
    'copy:misc'
]);

gulp.task('copy:vendor', function () {
    gulp.src(['node_modules/jquery/dist/jquery.min.js',
        'node_modules/angular/angular.min.js',
        'node_modules/angular-route/angular-route.min.js'
    ])
        .pipe(plugins.concat('vendor.min.js'))
        .pipe(gulp.dest(dirs.dist + '/js'));

    gulp.src(['node_modules/jquery/dist/jquery.min.map',
        'node_modules/angular/angular.min.js.map',
        'node_modules/angular-route/angular-route.min.js.map'
    ])
        .pipe(gulp.dest(dirs.dist + '/js'));

    gulp.src(['node_modules/normalize.css/normalize.css'
    ])
        .pipe(plugins.concatCss('vendor.css'))
        .pipe(plugins.uncss({
            html: [dirs.src + 'index.html', dirs.src + '/views/**/*.html']
        }))
        .pipe(plugins.minifyCss())
        .pipe(plugins.rename('vendor.min.css'))
        .pipe(gulp.dest(dirs.dist + '/css'));
});

gulp.task('copy:misc', function () {
    gulp.src('LICENSE.txt')
        .pipe(gulp.dest(dirs.dist));

    gulp.src([
        // Copy all files
        dirs.src + '/**/*',

        // Exclude the following files
        // (other tasks will handle the copying of these files)
        '!' + dirs.src + '/css/*',
        '!' + dirs.src + '/js/*',
        '!' + dirs.src + '/doc/*',
        '!' + dirs.src + '/.gitignore',
        '!' + dirs.src + '/.gitattributes'
    ], {

        // Include hidden files by default
        dot: true

    }).pipe(gulp.dest(dirs.dist));
});

gulp.task('copy:html', function (done) {
    require('del')(dirs.dist + '/views/*', done);
    gulp.src([dirs.src + '/views/**/*.html'])
        .pipe(gulp.dest(dirs.dist + '/views'))
        .pipe(plugins.connect.reload());
});

gulp.task('bundle', [
    'bundle:css',
    'bundle:js'
]);

gulp.task('bundle:css', function (done) {
    require('del')(dirs.dist + '/css/bundle.min.css', done);

    gulp.src([dirs.src + '/css/base.scss'])
        .pipe(plugins.sass({outputStyle: 'compressed'}))
        .pipe(plugins.autoprefixer({
            browsers: ['last 2 versions', 'ie >= 8', '> 1%'],
            cascade: false
        }))
        .pipe(plugins.minifyCss())
        .pipe(plugins.rename('bundle.min.css'))
        .pipe(gulp.dest(dirs.dist + '/css'))
        .pipe(plugins.connect.reload());
});

gulp.task('bundle:js', function (done) {
    require('del')(dirs.dist + '/js/app.min.js', done);
    gulp.src([dirs.src + '/js/**/*.js'])
        .pipe(plugins.sourcemaps.init())
            .pipe(plugins.concat('app.min.js'))
            .pipe(plugins.ngAnnotate())
        //.pipe(plugins.uglify())
        .pipe(plugins.sourcemaps.write())
        .pipe(gulp.dest(dirs.dist + '/js'))
        .pipe(plugins.connect.reload());
});

gulp.task('lint:js', function () {
    return gulp.src([
        'gulpfile.js',
        dirs.src + '/js/*.js',
        dirs.test + '/*.js'
    ]).pipe(plugins.jscs())
        .pipe(plugins.jshint())
        .pipe(plugins.jshint.reporter('jshint-stylish'))
        .pipe(plugins.jshint.reporter('fail'));
});

gulp.task('watch', function () {
    gulp.watch(dirs.src + '/js/*.js', ['bundle']);
    gulp.watch(dirs.src + '/css/*.scss', ['bundle']);
    gulp.watch(dirs.src + '/views/**/*.html', ['copy:html']);
});

gulp.task('connect', function () {
    plugins.connect.server({
        root: 'dist',
        livereload: true
    });
});

gulp.task('sftp', function () {
    return gulp.src(dirs.dist + '/**/*')
        .pipe(plugins.sftp({
            host: 'ftp.palekhfest.tk',
            port: '21',
            user: 'u345440680.palekhfest',
            pass: 'palekhfest',
            remotePath: '/home/u345440680/public_html/'
        }));

});

gulp.task('watch', function () {
    gulp.watch(dirs.src + '/js/*.js', ['bundle']);
    gulp.watch(dirs.src + '/css/*.scss', ['bundle']);
    gulp.watch(dirs.src + '/views/**/*.html', ['copy:html']);
});

gulp.task('connect', function () {
    plugins.connect.server({
        root: 'dist',
        livereload: true
    });
});

gulp.task('sftp', function () {
    return gulp.src(dirs.dist + '/**/*')
        .pipe(plugins.sftp({
            host: 'ftp.palekhfest.tk',
            port: '21',
            user: 'u345440680.palekhfest',
            pass: 'palekhfest',
            remotePath: '/home/u345440680/public_html/'
        }));

});

// ---------------------------------------------------------------------
// | Main tasks                                                        |
// ---------------------------------------------------------------------

gulp.task('archive', function (done) {
    runSequence(
        'build',
        'archive:create_archive_dir',
        'archive:zip',
        done);
});

gulp.task('build', function (done) {
    runSequence(
        ['connect', 'clean'],
        ['copy', 'bundle'],
        'watch',
        done);
});

gulp.task('deploy', function (done) {
    runSequence(
        'clean',
        ['copy', 'bundle'],
        'sftp',
        done);
});

