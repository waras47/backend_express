const hello = require('./module/index');
const http = require('http');
const moment = require('moment');

const server = http.createServer((req, res) => {
  switch (req.url) {
    case '/welcome' : welcome(res); break;
    default: failed(res); break;
  }
});


const welcome = res => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/json');
  res.write(JSON.stringify({
    status : 'successfully',
    message: 'welcome to mern class',
    study: 'eduwork',
    loginAt : moment()
  }));
  res.end();
}
const failed = res => {
  res.statusCode = 404;
  res.setHeader('Content-Type', 'text/json');
  res.write(JSON.stringify({
    status : 'failed',
    message: 'Resource Not found',
  }));
  res.end();
}
server.listen(3000, () => console.log ('server running at http://127.0.0.1:3000'));