const http = require('http');

const server = http.createServer((req, res) => {
  res.writeHead(200, {
    'Content-Type': 'application/json',
    'X-Content-Type-Options': 'nosniff'
  });

  res.end(JSON.stringify({
    application: 'Healthcare Demo',
    status: 'running',
    data: 'Dummy data only'
  }));
});

server.listen(3000, '0.0.0.0', () => {
  console.log('Healthcare demo running on port 3000');
});
