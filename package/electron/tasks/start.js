'use strict';

var childProcess = require('child_process');
var electron = require('electron-prebuilt');
var gulp = require('gulp');

gulp.task('start', gulp.series(gulp.parallel('build', 'watch'), function (done) {
    childProcess.spawn(electron, ['./build'], {
        stdio: 'inherit'
    })
    .on('close', function () {
        // User closed the app. Kill the host process.
        process.exit();
    });
    done();
}));
