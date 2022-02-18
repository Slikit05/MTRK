module.exports = function () {
	$.gulp.task('sass', function () {
		return $.gulp.src(['src/static/sass/style.scss'])
			.pipe($.gp.sourcemaps.init())
			.pipe($.gp.sass({
				'include css': true
			}))
			.pipe($.gp.autoprefixer({
				browsers: ['last 20 versions', '> 0%']
			}))
			.on('error', $.gp.notify.onError({
				title: 'style'
			}))
			.pipe($.gp.csso())
			.pipe($.gp.sourcemaps.write())
			.pipe($.gulp.dest('build/css'))
			.pipe($.bs.reload({
				stream: true
			}));
	});
}
