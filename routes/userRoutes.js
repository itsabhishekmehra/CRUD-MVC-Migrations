const express = require('express')
const router = express.Router()
const knex = require("../config/dbConfig")
const jwt = require('jsonwebtoken');

//User Controller
const { loadSignup, loadLogin } = require("../controllers/userController")

router.post("/signup", loadSignup)

router.post("/login", loadLogin)

module.exports = router;