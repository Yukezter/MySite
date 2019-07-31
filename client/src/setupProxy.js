const proxy = require('http-proxy-middleware')

const PORT = process.env.PORT || 8080
const routes = ['/home', '/blog', '/portfolio']

module.exports = app => {
  routes.forEach(route => {
    app.use(proxy(`/api${route}`, { target: `http://localhost:${PORT}` }))
  })
}