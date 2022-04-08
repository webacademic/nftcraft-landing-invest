"use strict";

import { paths } from "../gulpfile.babel";
import gulp from "gulp";
import debug from "gulp-debug";

gulp.task("resource", () => {
    return gulp.src(paths.resource.src)
        .pipe(gulp.dest(paths.resource.dist))
        .pipe(debug({
            "title": "resource"
        }));
});