const router = require('express-promise-router')()

const IndexController = require('../controllers/index')

router
  .route('/home')
  .get(IndexController.getHome)

router
  .route('/blog')
  .get(IndexController.getBlog)

router
  .route('/portfolio')
  .get(IndexController.getPortfolio)

module.exports = router