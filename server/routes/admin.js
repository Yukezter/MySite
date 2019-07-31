const router = require('express-promise-router')()

const AdminController = require('../controllers/admin')

router
  .route('/')
  .get(AdminController.getAdmin)

module.exports = router