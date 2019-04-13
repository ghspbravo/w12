const gulp = require('gulp'),
	connect = require('gulp-connect');

gulp.task('connect', function() {
	connect.server({
		root: './',
		livereload: true
	});
});

gulp.task('html', function () {
	gulp.src(['./*.html'])
		.pipe(gulp.dest('./'))
		.pipe(connect.reload());
});

gulp.task('js', function () {
	gulp.src(['static_npo/js/*.js'])
		.pipe(gulp.dest('static_npo/js/'))
		.pipe(connect.reload());
});

gulp.task('css', function () {
	gulp.src(['static_npo/css/*.css'])
		.pipe(gulp.dest('static_npo/css/'))
		.pipe(connect.reload());
});

gulp.task('watch', function () {
	gulp.watch(['./*.html'], ['html']);
	gulp.watch(['static_npo/css/*.css'], ['css']);
	gulp.watch(['static_npo/js/*.js'], ['js']);
});

gulp.task('default', ['connect', 'watch']);