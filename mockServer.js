const jsonServer = require('json-server');
const db = require('./db.js');

const server = jsonServer.create();
const router = jsonServer.router({});
const middlewares = jsonServer.defaults();

server.use(middlewares);

const mockServerDataJson = db();

// Routes
server.get('/v1/products', (req, res) => {
  const data = mockServerDataJson[req.header('X-User-Id')].products;
  setTimeout(() => res.jsonp(data), 1000);
});

server.use(router);

server.listen(2001, () => {
  /* eslint-disable no-console */
  console.log('JSON Server is running');
});
