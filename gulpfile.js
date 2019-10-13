// import all task from gulp
const gulp = require('gulp');
const imagemin = require('gulp-imagemin');
const uglify = require('gulp-uglify');
const sass = require('gulp-sass');
const browserSync = require('browser-sync').create();
const { series } = require('gulp');

gulp.task('msg', function(){
    return console.log('gulp tourne ..')
});

function fileHTML(){
    gulp.src('src/*.html')
		.pipe(gulp.dest('./html'))
		.pipe(browserSync.stream());

}

function minify(){
	gulp.src('src/js/*.js')
	.pipe(uglify())
	.pipe(gulp.dest('./js'))

};

function style(){
	gulp.src('./src/scss/**/*.scss')
	.pipe(sass().on('error', sass.logError))
	.pipe(gulp.dest('./css/'))
	.pipe(browserSync.stream());

};

// gulp.task('clean', () => {
//     return del([
//         'css/list.css',
//     ]);
// });

function watch(){
	browserSync.init({
		server: {
			baseDir: './src/'
		}
	});
	
	gulp.watch('./src/scss/**/*scss', style);
	gulp.watch('/src/js/**/*.js').on('change', browserSync.reload);
	// gulp.watch('src/images/*').on('change', browserSync.reload);
	gulp.watch('/src/*.html').on('change', browserSync.reload);

}

// gulp.task('default', function() {
//     gulp.watch('src/*.html', gulp.series('fileHTML')),
//     gulp.watch('src/images/*', gulp.series('images')),
//     gulp.watch('src/js/*.js', gulp.series('minify')),
//     gulp.watch('src/sass/*.scss', gulp.series('sass')),
//     return
// });

// gulp.task('clean:', function (resolve) {
//     del.sync('');
//     resolve();
// })

// gulp.task('default', async function(){ gulp.series('sass','images','fileHTML','minify' )})

gulp.task('default', gulp.series(minify, style, fileHTML));

// exports.build = build;
exports.style = style;
exports.minify = minify;
exports.watch = watch;
