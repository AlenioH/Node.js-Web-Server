const serve = require('node-static');

const file = new serve.Server('./public');

require('http')
  .createServer(function (request, response) {
    request
      .addListener('end', function () {
        file.serve(request, response);
      })
      .resume();
  })
  .listen(8080);
