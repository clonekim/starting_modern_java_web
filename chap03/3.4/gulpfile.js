var gulp = require('gulp'),
	browserify = require('browserify'),
	source = require('vinyl-source-stream');
 
gulp.task('build', function() {
	var b = browserify('./src/store.js', {debug:true});
	return b.bundle()
		 .pipe(source('all.js'))
//		 .pipe(gulp.dest('./target'));
 		 .pipe(gulp.dest('../everystore/public/js'));
});
 
gulp.task('watch', function() {
	gulp.watch('./src/**/*.js', ['build']);
});
