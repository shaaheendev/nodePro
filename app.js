const http = require('http');

const server = http.createServer((req, res) => {
  // console.log(req.url);
  if(req.url === "/") {
    res.end('welcome to our home page');
    return;
  }
  if(req.url === "/about") {

    res.end('here is our short history');
    return;
  }
  res.end(`
  <h1>Ops!</h1>
  <p>we can't seem to find the page you are lookingn for.</p>
  <a href="/">back home</a>
  `)
  // res.write();
});

server.listen(5000)