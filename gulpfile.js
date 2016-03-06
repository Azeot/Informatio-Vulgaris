var gulp = require('gulp'); 

var jshint = require('gulp-jshint');
var sass = require('gulp-sass');
var cleanCSS = require('gulp-clean-css');
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');
var rename = require('gulp-rename');

gulp.task('lint', function() {
    return gulp.src('public_html/source/javascript/*.js')
        .pipe(jshint())
        .pipe(jshint.reporter('default'));
});

//compila files sass
gulp.task('sass', function() {
    return gulp.src('public_html/source/scss/*.scss')
        .pipe(sass())
        .pipe(gulp.dest('public_html/source/css'));
});

//minimizza il css
gulp.task('minify-css', function() {
  return gulp.src('public_html/source/css/*.css')
    .pipe(cleanCSS({compatibility: 'ie8'}))
    .pipe(gulp.dest('public_html/source/css/minified/'));
});

//concatena il css
gulp.task('concat-css', function() {
    return gulp.src('public_html/source/css/minified/*.css')
        .pipe(concat('bundle.min.css'))
        .pipe(gulp.dest('public_html/assets/css'));
});

//minimizza gli scripts
gulp.task('uglify-scripts', function() {
    return gulp.src('public_html/source/javascript/*.js')
        .pipe(uglify())
        .pipe(gulp.dest('public_html/source/javascript/minified'));
});

//concatena gli scripts
gulp.task('concat-scripts', function() {
    return gulp.src('public_html/source/javascript/minified/*.js')
        .pipe(concat('bundle.min.js'))
        .pipe(gulp.dest('public_html/assets/javascript'));
});

// Watch Files For Changes
gulp.task('watch', function() {
    gulp.watch('public_html/source/javascript/*.js', ['lint', 'uglify-scripts', 'concat-scripts']);
    gulp.watch('public_html/source/scss/*.scss', ['sass', 'minify-css', 'concat-css']);
});

// Default Task
gulp.task('default', ['lint', 'sass', 'minify-css', 'concat-css', 'uglify-scripts', 'concat-scripts', 'watch']);
// Default Task
gulp.task('default', ['lint', 'sass', 'minify-css', 'concat-css', 'uglify-scripts', 'concat-scripts', 'watch']);
