// $ gulp sass で実行するタスク
module.exports = function(gulp, plugins, growl) {
    gulp.task('sass:dev', function () {
        return gulp.src('assets/styles/**.scss')
            .pipe(
                plugins.sass({
                    expand: true,
                    ext: '.css'
                })
            )
            .pipe(gulp.dest('.tmp/public/styles/'))
    });
};
