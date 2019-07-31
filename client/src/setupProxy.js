const proxy = require('http-proxy-middleware')

// Had to config proxy manually as a 
// workaround to a Firefox auto reload bug
module.exports = app => {
  app.use(proxy('/home', { target: 'http://localhost:8080/' }))
  app.use(proxy('/blog', { target: 'http://localhost:8080/' }))
  app.use(proxy('/portfolio', { target: 'http://localhost:8080/' }))
}