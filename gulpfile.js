var gulp = require('gulp');
var browserSync = require('browser-sync');
var reload      = browserSync.reload;
var stylus = require('gulp-stylus');
var rjs = require('gulp-requirejs');
var uglify = require('gulp-uglify');


gulp.task('move', function() {
	gulp.src(['./src/**/*.*', '!./src/**/*.styl'])
	.pipe(gulp.dest('build'))
	// .pipe(reload({stream:true}))
});

gulp.task('stylus', function() {
	gulp.src('./src/css/style.styl')
    .pipe(stylus())
    .pipe(gulp.dest('build/css'));
});



gulp.task('watch', function() {
	gulp.watch('./src/**/*.*', ['move']);
	gulp.watch('./src/css/style.styl', ['stylus']);
});


gulp.task('build', ['move', 'stylus']);


gulp.task('optimize', ['build'], function() {
	rjs({
		baseUrl: './build/',
		mainConfigFile: './build/common.js',
		out: 'common.js',
		name: 'common'
	}).
	pipe(uglify()).
	pipe(gulp.dest('./production'));
});




gulp.task('browser-sync', ['watch'], function() {
	browserSync('./build/**/*.*', {
		server: {
			baseDir: './build/'
		}
	});
});

gulp.task('default', ['build', 'browser-sync']);


gulp.task('production', ['optimize'], function() {
	gulp.src(['./build/**/*.css', './build/index.html', './build/**/require.js']).
	pipe(gulp.dest('./production'));
});
