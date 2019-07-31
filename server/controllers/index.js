module.exports = {
  getHome: (req, res, next) => {
    res.json({ page: 'Home' })
  },
  getBlog: (req, res, next) => {
    res.json({ page: 'Blog' })
  },
  getPortfolio: (req, res, next) => {
    res.json({ page: 'Portfolio' })
  }
}