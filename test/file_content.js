var assert = require('assert');
var fs = require('fs');
var path = require('path');

var pkg = require('../package.json');
var dirs = pkg['h5bp-configs'].directories;

// - TEST UTILS -

function checkString(file, string, done) {
    var character = '';
    var matchFound = false;
    var matchedPositions = 0;
    var readStream = fs.createReadStream(file, { 'encoding': 'utf8' });

    readStream.on('close', done);
    readStream.on('error', done);
    readStream.on('readable', function () {

        // Read file until the string is found
        // or the whole file has been read
        while (matchFound !== true &&
            (character = readStream.read(1)) !== null) {

            if (character === string.charAt(matchedPositions)) {
                matchedPositions += 1;
            } else {
                matchedPositions = 0;
            }

            if (matchedPositions === string.length) {
                matchFound = true;
            }

        }

        assert.equal(true, matchFound);
        this.close();
    });
}

// - TESTS -

function runTests() {
    var dir = dirs.dist;
    describe('Test if the files from the "' + dir + '" directory have the expected content', function () {
        it('"bundle.min.css" should contain a custom banner', function (done) {
            var string = '/*! HTML5 Boilerplate v5.2.0 | MIT License | https://html5boilerplate.com/ */';
            checkString(path.resolve(dir, 'css/bundle.min.css'), string, done);
        });

        it('"vendor.min.css" should contain a custom banner', function (done) {
            var string = '/*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */';
            checkString(path.resolve(dir, 'css/vendor.min.css'), string, done);
        });
    });
}

runTests();
