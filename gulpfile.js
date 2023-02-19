const gulp = require("gulp");
const jest = require("gulp-jest").default;

gulp.task("test", function () {
  console.log("sa");
  return gulp.src("test/**/*.js", { read: false }).pipe(
    jest({
      verbose: true,
      notify: true,
      reporter: "nyan",
    })
  );
});

gulp.task("watch", function () {
  gulp.watch("**/*.js", gulp.series("test"));
});
