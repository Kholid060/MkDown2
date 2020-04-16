const path = require('path');

module.exports = {
  lintOnSave: false,
  devServer: {
    host: 'localhost',
  },
  configureWebpack: {
    resolve: {
      alias: {
        '~': path.resolve(__dirname, 'src/'),
      },
    },
  },
};
