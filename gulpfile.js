let gulp            = require('gulp'),
	scss            = require('gulp-sass'),
	browserSync     = require('browser-sync'),
	autoprefixer    = require('gulp-autoprefixer'),
	concat          = require('gulp-concat'),
	iconfont        = require('gulp-iconfont'),
	iconfontCss     = require('gulp-iconfont-css');


gulp.task('scss', function() {
	return gulp.src('assets/scss/style.scss')
		.pipe(scss().on( 'error', function( error )
			{console.log( error );} )
		)
		.pipe(autoprefixer(['last 2 versions', '> 1%', 'ie 8'], {cascade:true}))
		.pipe(gulp.dest('assets/css'))
		.pipe(browserSync.reload({stream: true}));
});

gulp.task('browser-sync', function(){
	browserSync({
		server: {
			baseDir: './'
		},
		notify: false
	});
});

gulp.task('iconfont', function(){
	gulp.src(['assets/icons/*.svg'])
		.pipe(iconfontCss({
			fontName: 'icons',
			path: 'assets/scss/templates/_icons.scss',
			targetPath: '../scss/base/_icons.scss',
			fontPath: '../fonts/'
		}))
		.pipe(iconfont({
			fontName: 'icons',
			normalize: true,
			fontHeight: 1001
		}))
		.pipe(gulp.dest('assets/fonts/')
	);
});

gulp.task('default', ['browser-sync', 'scss'], function() {
	gulp.watch('assets/scss/**/*.scss', ['scss']);
	gulp.watch('assets/js/**/*.js', browserSync.reload);
	gulp.watch('**/*.html', browserSync.reload);
});