const gulp = require('gulp');
const cp = require('child_process');
const exec = cp.exec;
const Q = require('q');

gulp.task('dev', ['watch-scss', 'next-dev'], function() {
	
});

function genDefered(cmd, callback) {
	return function() {
		const defered = Q.defer();
		execSync(cmd, function(err, stdout, stderr) {
			if (err) {
				defered.reject(err);
				throw err;
			}

			defered.resolve(callback);
		});

		return defered.promise;
	}
}

const noop = function() {};
const sassCMD = 'sass --watch scss/:css/ -t compressed --sourcemap=none';
const nextCMD = 'npm run dev';
const sassTaskCallback = genDefered(sassCMD, noop);
const nextTaskCallback = genDefered(nextCMD, noop);

gulp.task('watch-scss', sassTaskCallback);
gulp.task('next-dev', nextTaskCallback);

gulp.task('default', ['dev']);
