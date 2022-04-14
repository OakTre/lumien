import gulp from 'gulp';
import config from '../config';

const fontsBuild = () => (
  gulp.src(`${config.src.fonts}/**/*`)
    .pipe(gulp.dest(config.dest.fonts))
);

const faviconBuild = () => (
  gulp.src(`${config.src.favicon}/**/*`)
    .pipe(gulp.dest(config.dest.favicon))
);

const includeBuild = () => (
  gulp.src(`${config.src.include}/**/*`)
    .pipe(gulp.dest(config.dest.include))
);

const jsBackendBuild = () => (
  gulp.src(`${config.src.backendJs}/**/*`)
    .pipe(gulp.dest(config.dest.backendJs))
);

export const assetsBuild = gulp.parallel(fontsBuild, faviconBuild, includeBuild, jsBackendBuild);

export const assetsWatch = () => {
  gulp.watch(`${config.src.fonts}/**/*`, fontsBuild);
  gulp.watch(`${config.src.favicon}/**/*`, faviconBuild);
  gulp.watch(`${config.src.include}/**/*`, includeBuild);
  gulp.watch(`${config.src.backendJs}/**/*`, jsBackendBuild);
};
