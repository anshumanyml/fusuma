'use strict';

/**
 * packages
 *
 * - postcss-cssnext
 *   - autoprefixer
 */

const common = {
  plugins: [require('postcss-import'), require('postcss-mixins'), require('postcss-cssnext')]
};

const devConfig = () => {
  return {
    plugins: [...common.plugins, require('postcss-reporter'), require('postcss-browser-reporter')]
  };
};

const prodConfig = () => common;

function postcss() {
  return process.env.NODE_ENV !== 'production' ? devConfig : prodConfig;
}

module.exports = postcss;
