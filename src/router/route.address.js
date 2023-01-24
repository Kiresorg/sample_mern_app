// receives HTTP req from server.js
// has the route handlers

module.exports = (app) => {
  var router = require('express').Router()
  const controller = require('../controller/controller.address')

  // Create a new address
  router.post('/', controller.create)

  // GET all Addresses
  router.get('/', controller.findAll)

  // GET address by ID
  router.get('/:id', controller.findById)

  app.use('/api/address', router)
}
