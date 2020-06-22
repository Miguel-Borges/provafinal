const express = require ("express")
const fraseController = require("./controllers/fraseController")


const routes = express.Router()

routes.get("/", fraseController.index)

module.exports = routes