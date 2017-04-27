const gulp = require('gulp');
const cp = require('child_process');
const exec = cp.exec;
const open = require('open');
const Q = require('q');
const runSequence = require('gulp-sequence');

gulp.task('dev', ['watch-scss', 'open', 'next-dev'], function() {
	console.log('Successfully start dev task');
});

function genDefered(cmd, callback) {
	return function() {

		const defered = Q.defer();
		const task = exec(cmd, function(err, stdout, stderr){
			if (err) {
				console.log(err);
				defered.reject(stderr);
				throw err;
			}

			console.info('Successfully start '+ cmd +' task');
			defered.resolve(callback);
		});

		task.stdout.pipe(process.stdout);

		return defered.promise;
	}
}

const noop = function() { return true;};
const sassCMD = 'sass --watch scss/:css/ -t compressed --sourcemap=none &';
const nextCMD = 'npm run dev';
const sassTaskCallback = genDefered(sassCMD, noop);
const nextTaskCallback = genDefered(nextCMD, noop);

gulp.task('watch-scss', sassTaskCallback);
gulp.task('next-dev', nextTaskCallback);

gulp.task('default', ['dev']);
gulp.task('next-build', genDefered('npm run build', noop));


gulp.task('open', function() {
	const defered = Q.defer();

	setTimeout(function() {
		open('http://localhost:3000');
		console.log('Broswer has been succefully opened');
		defered.resolve();
	}, 25000);

	return defered.promise;
});
gulp.task('next-start', genDefered('npm run start', noop));

gulp.task('build', function() {
	const d = Q.defer();
	runSequence('next-build', function() {
		console.log('Project has been successfully built');
		d.resolve();
	});

	return d.promise;
});
