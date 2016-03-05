// Include gulp
var gulp = require('gulp'); 

// Include Our Plugins
var jshint = require('gulp-jshint');
var sass = require('gulp-sass');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');

// Lint Task
gulp.task('lint', function() {
    return gulp.src('public_html/source/javascript/*.js')
        .pipe(jshint())
        .pipe(jshint.reporter('default'));
});

// Compile Our Sass
gulp.task('sass', function() {
    return gulp.src('public_html/source/scss/*.scss')
        .pipe(sass())
        .pipe(gulp.dest('public_html/assets/css'));
});

// Concatenate & Minify JS
gulp.task('scripts', function() {
    return gulp.src('public_html/source/javascript/*.js')
        .pipe(concat('all.js'))
        .pipe(gulp.dest('public_html/source/javascript/bundle'))
        .pipe(rename('bundle.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest('public_html/assets/bundle'));
});

// Watch Files For Changes
gulp.task('watch', function() {
    gulp.watch('public_html/source/javascript/*.js', ['lint', 'scripts']);
    gulp.watch('public_html/source/scss/*.scss', ['sass']);
});

// Default Task
gulp.task('default', ['lint', 'sass', 'scripts', 'watch']);
// Default Task
gulp.task('default', ['lint', 'sass', 'scripts', 'watch']);
