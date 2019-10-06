// import all task from gulp
const gulp = require('gulp');
const imagemin = require('gulp-imagemin');
var uglify = require('gulp-uglify');

gulp.task('msg', function(){
    return console.log('gulp tourne ..')
});

gulp.task('fileHTML', function(){
    gulp.src('src/*.html')
        .pipe(gulp.dest('dist'))
})

gulp.task('image', () =>
	gulp.src('src/images/*')
		.pipe(imagemin())
		.pipe(gulp.dest('dist/images'))
);

gulp.task('minify', () =>
	gulp.src('src/js/*.js')
		.pipe(uglify())
		.pipe(gulp.dest('dist/js'))
);