/*global require*/
var gulp = require('gulp');
var browserSync = require('browser-sync');
var stylus = require('gulp-stylus');
var rjs = require('gulp-requirejs');
var uglify = require('gulp-uglify');
var jshint = require('gulp-jshint');
var jscs = require('gulp-jscs');


gulp.task('move', function() {
	return gulp.src(['./src/**/*.*', '!./src/**/*.styl']).
		pipe(gulp.dest('build'));
});

gulp.task('stylus', function() {
	return gulp.src('./src/css/style.styl').
		pipe(stylus()).
		pipe(gulp.dest('build/css'));
});


gulp.task('validate', function() {

	return gulp.src('./src/modules/*.js').
		pipe(jscs()).
		pipe(jshint()).
		pipe(jshint.reporter('default'));

});



gulp.task('watch', function() {
	gulp.watch('./src/**/*.*', ['move']);
	gulp.watch('./src/css/style.styl', ['stylus']);
});


gulp.task('build', ['move', 'stylus', 'validate'], function(cb) {
	cb();
});


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
	var
		stream = gulp.src([
			'./build/**/*.css',
			'./build/index.html',
			'./build/**/require.js'
		]).
		pipe(gulp.dest('./production'));
	return stream;
});
