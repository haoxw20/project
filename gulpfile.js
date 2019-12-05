let gulp = require('gulp'),
    rename = require('gulp-rename'),
    imagemin = require('gulp-imagemin'),
    sass = require('gulp-sass'),
    cssnano = require('gulp-cssnano'),
    concat = require('gulp-concat'),
    uglify = require('gulp-uglify');

gulp.task('js',()=>{
    gulp.src('./src/js/*.js')
    .pipe(uglify())
    .pipe(rename({suffix : '.min'}))
    .pipe(gulp.dest('./dist/js'));
})

gulp.task('sass',()=>{
    gulp.src('./src/sass/*.scss')
    .pipe(sass({outputStyle : 'expanded'}))
    //.pipe(cssnano())
    .pipe(rename({suffix : '.min'}))
    .pipe(gulp.dest('./dist/css'));
})

gulp.task('img',()=>{
    gulp.src('./src/img/*.*')
    .pipe(imagemin())
    .pipe(gulp.dest('./dist/img'));
})

gulp.task('default',()=>{
    gulp.watch('./src/js/*.js',['js']);
    gulp.watch('./src/sass/*.scss',['sass']);
})