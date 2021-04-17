var assert = require('assert');
var fs = require('fs');
var path = require('path');

var pkg = require('./../package.json');
var dirs = pkg['h5bp-configs'].directories;

var expectedFilesInDistDir = [
    '.editorconfig',
    '.htaccess',
    '404.html',
    'apple-touch-icon.png',
    'browserconfig.xml',
    'crossdomain.xml',
    'sitemap.xml',
    'LICENSE.txt',
    'robots.txt',
    'tile-wide.png',
    'tile.png',
    'favicon.ico',
    'humans.txt',
    'index.html',

    'css/',
    'css/vendor.min.css',
    'css/bundle.min.css',

    'fonts/',
    'fonts/certa-sans-medium.otf',
    'fonts/certa-sans-medium.ttf',
    'fonts/icomoon.eot',
    'fonts/icomoon.svg',
    'fonts/icomoon.ttf',
    'fonts/icomoon.woff',

    'img/',
    'img/footer-bird.png',
    'img/footer-cat.png',
    'img/footer-dashes.png',
    'img/main-bg.png',
    'img/main-bg-min.png',
    'img/programma_applefeast_2015_1.jpg',
    'img/programma_applefeast_2015_12.jpg',

    'img/artists/',
    'img/artists/dek.jpg',
    'img/artists/galkina.jpg',
    'img/artists/gasumyan.JPG',
    'img/artists/gavrilova.jpg',
    'img/artists/hleb.jpg',
    'img/artists/hudyakova.jpg',
    'img/artists/ivan-kolygin.jpg',
    'img/artists/kolygin.jpg',
    'img/artists/lobanova.jpg',
    'img/artists/lori.jpg',
    'img/artists/pikulev.jpg',
    'img/artists/smirnova.JPG',
    'img/artists/ukleyko.jpg',

    'img/lections/',
    'img/lections/dupovkina.jpg',
    'img/lections/filatov.jpg',
    'img/lections/fisan.jpg',
    'img/lections/fond-artel.jpg',
    'img/lections/golubeva.jpg',
    'img/lections/hafizov.jpg',
    'img/lections/kurkin.jpg',
    'img/lections/leonov.jpg',
    'img/lections/pugina.jpg',
    'img/lections/rudenko.jpg',
    'img/lections/shatrov.jpg',
    'img/lections/solilov.jpg',

    'img/musicians/',
    'img/musicians/andrew-bychenkov.jpg',
    'img/musicians/dasha-shultz.jpg',
    'img/musicians/dmitriy-dr.jpg',
    'img/musicians/ilya-razin.jpg',
    'img/musicians/korabl-snov.jpg',
    'img/musicians/megapolis.jpg',
    'img/musicians/neon-tiger.jpg',
    'img/musicians/norma-jin.jpg',
    'img/musicians/oleg-legkiy.jpg',
    'img/musicians/real-good-hands.jpg',

    'img/partners/',
    'img/partners/kovcheg.png',
    'img/partners/ostrovsky.jpg',
    'img/partners/palechru.png',
    'img/partners/sloboda.png',

    'img/slides/',
    'img/slides/panorama-palekh.jpg',

    'js/',
    'js/angular-route.min.js.map',
    'js/angular.min.js.map',
    'js/app.min.js',
    'js/vendor.min.js',

    'json/',
    'json/participants.json',
    'json/partners.json',
    'json/program.json',

    'pdf/',
    'pdf/contest.pdf',
    'pdf/festival.pdf',
    'pdf/guide.pdf',
    'pdf/pleinair.pdf',
    'pdf/program.pdf',

    'views/',
    'views/contacts.html',
    'views/guide.html',
    'views/main.html',
    'views/participants.html',
    'views/program.html',

    'views/contest/',
    'views/contest/about.html',
    'views/contest/fairytale.html',

    'views/elements/',
    'views/elements/footer.html',
    'views/elements/logo.html',
    'views/elements/navigation.html',
];

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

function checkFiles(directory, expectedFiles) {

    // Get the list of files from the specified directory
    var files = require('glob').sync('**/*', {
        'cwd': directory,
        'dot': true,      // include hidden files
        'mark': true      // add a `/` character to directory matches
    });

    // Check if all expected files are present in the
    // specified directory, and are of the expected type
    expectedFiles.forEach(function (file) {

        var ok = false;
        var expectedFileType = (file.slice(-1) !== '/' ? 'regular file' : 'directory');

        // If file exists
        if (files.indexOf(file) !== -1) {

            // Check if the file is of the correct type
            if (file.slice(-1) !== '/') {
                // Check if the file is really a regular file
                ok = fs.statSync(path.resolve(directory, file)).isFile();
            } else {
                // Check if the file is a directory
                // (Since glob adds the `/` character to directory matches,
                // we can simply check if the `/` character is present)
                ok = (files[files.indexOf(file)].slice(-1) === '/');
            }

        }

        it('"' + file + '" should be present and it should be a ' + expectedFileType, function () {
            assert.equal(ok, true);
        });

    });

    // List all files that should be NOT
    // be present in the specified directory
    (files.filter(function (file) {
        return expectedFiles.indexOf(file) === -1;
    })).forEach(function (file) {
        it('"' + file + '" should NOT be present', function () {
            assert(false);
        });
    });

}

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

function runTests() {

    describe('Test if all the expected files, and only them, are present in the build directories', function () {

        describe(dirs.dist, function () {
            checkFiles(dirs.dist, expectedFilesInDistDir);
        });

    });

}

runTests();
