const express = require('express')
const route = express.Router()

const services = require("../services/render")
const controller = require('../controller/controller')

/**
 * @description root route
 * @method GET/
 */
route.get("/", services.homeRoute)

/**
 * @description add article
 * @method GET/ add-article
 */
route.get("/add-article", services.add_article)

route.get("/show-article", services.show_article)


/**
 * @description update article
 * @method GET/ update-article
 */
route.get("/update-article", services.update_article)

// api
route.post('/api/articles', controller.create)
route.get('/api/articles', controller.find)
route.put('/api/articles/:id', controller.update)
route.delete('/api/articles/:id', controller.delete)

module.exports = route