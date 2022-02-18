module.exports = function () {
	$.gulp.task('img:dev', function () {
		return $.gulp.src('src/static/img/*.{png,jpg,gif}')
      .pipe($.gulp.dest('build/img'));
	});
};
