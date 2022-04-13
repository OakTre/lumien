const srcPath = 'src';
const destPath = 'build';

const config = {
  src: {
    root: srcPath,
    sass: `${srcPath}/scss`,
    js: `${srcPath}/js`,
    fonts: `${srcPath}/assets/fonts`,
    favicon: `${srcPath}/assets/favicon`,
    images: `${srcPath}/assets/img`,
    iconsMono: `${srcPath}/assets/icons/mono`,
    iconsMulti: `${srcPath}/assets/icons/multi`,
    include: `${srcPath}/assets/include`,
    pug: `${srcPath}/pug`,
  },

  dest: {
    root: destPath,
    html: destPath,
    css: `${destPath}/css`,
    js: `${destPath}/js`,
    fonts: `${destPath}/assets/fonts`,
    favicon: `${destPath}/assets/favicon`,
    include: `${destPath}/assets/include`,
    images: `${destPath}/images`,
  },

  setEnv() {
    this.isProd = process.argv.includes('--prod');
    this.isDev = !this.isProd;
  },
};

export default config;
