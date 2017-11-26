var gulp = require("gulp");
var browserify = require("browserify");
var source = require('vinyl-source-stream');
var tsify = require("tsify");
var paths = {
    pages: ['webContent/resources/*.html']
};
var dist = "webContent/resources/dist"

gulp.task("default",  function () {
    return browserify({
        basedir: '.',
        debug: true,
        entries: ['webContent/resources/ts/demo.ts'],
        cache: {},
        packageCache: {}
    })
    .plugin(tsify)
    .bundle()
    .pipe(source('bundle.js'))
    .pipe(gulp.dest(dist));

    
});