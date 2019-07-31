const proxy = require('http-proxy-middleware')

const PORT = process.env.PORT || 8080
const routes = ['/home', '/blog', '/portfolio']

// Auto reload wasn't working on Firefox.
// Configuring proxy manually instead of 
// adding proxy in package.json fixed the issue.
module.exports = app => {
  routes.forEach(route => {
    app.use(proxy(`/api${route}`, { target: `http://localhost:${PORT}` }))
  })
}