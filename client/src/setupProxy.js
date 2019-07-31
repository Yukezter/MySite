const proxy = require('http-proxy-middleware')

const PORT = process.env.PORT || 8080
const target = `http://localhost:${PORT}/`

// Auto reload wasn't working on Firefox.
// Configuring proxy manually instead of 
// proxy in package.json fixed the issue.
module.exports = app => {
  app.use(proxy('/home', { target }))
  app.use(proxy('/blog', { target }))
  app.use(proxy('/portfolio', { target }))
}