import gulp from 'gulp';
import exec from 'child_process';


gulp.task('icon', () => {
    exec('ls', {}, (error, stdout, stderr) => {
        console.log(stdout);
    });
});
