module.exports = {
  '/*': {
    target: 'http://127.0.0.1:8080',
    ws: false,
    bypass: function(req) {
      if (req.headers.accept.indexOf('application/json') === -1) return '/index.html';
    }
  }
}