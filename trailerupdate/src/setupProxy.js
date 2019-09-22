const proxy = require('http-proxy-middleware');

module.exports = function(app) {
  app.use( '/youtube', proxy({
    target: 'https://youtube.com' ,
    changeOrigin: true,
  }));
};
