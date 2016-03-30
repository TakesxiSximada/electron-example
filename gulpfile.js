var gulp = require('gulp');
var exec = require('child_process').exec;
// import gulp from 'gulp';
// import exec from 'child_process';


gulp.task('icon', function (){
    exec('ls', {}, function (error, stdout, stderr){
        console.log(stdout);
    });
});
