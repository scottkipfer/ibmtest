var gulp = require("gulp");
var concat = require("gulp-concat");
var uglify = require("gulp-uglify");
var ngAnnotate = require("gulp-ng-annotate");
var minifyCSS = require("gulp-minify-css");
var jshint = require("gulp-jshint");


gulp.task('js', function() {
    gulp.src(['public/**/**/*.js', '!public/lib/**', '!public/dist/*.js'])
        .pipe(concat('ibm_exercise.js'))
        .pipe(ngAnnotate())
        .pipe(uglify())
        .pipe(gulp.dest("./public/dist/"))
});

gulp.task('css', function() {
    gulp.src(['public/**/**/*.css', '!public/lib/**', '!public/dist/*.css'])
        .pipe(concat('ibm_exercise.css'))
        .pipe(minifyCSS())
        .pipe(gulp.dest("./public/dist/"))
});

gulp.task('watch', ['js', 'css'], function() {
    gulp.watch(['public/**/**/*.js', '!public/dist/*.js', 'public/lib/**'], ['js']);
    gulp.watch(['public/**/**/*.css','!public/dist/*.css'],['css']);
});

gulp.task('jshint', function () {
    gulp.src(['public/services/**/*.js'])
        .pipe(jshint())
        .pipe(jshint.reporter('jshint-stylish'))
        .pipe(jshint.reporter('fail'));
});