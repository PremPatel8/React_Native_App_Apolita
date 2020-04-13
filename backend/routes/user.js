const express = require('express');
const bcrypt = require("bcrypt");

const logger = require('../logger/logger');
const middleware = require("../middlewares/middleware.js");

const router = express.Router();

const saltRounds = 10;

router.post("/signup", async (req, res) => {
    const { firstname, lastname, email, password } = req.body;
    if (!(firstname || lastname || email || password)) {
        errMsg = "mandatory field missing field in request";
        logger.error(errMsg);
        return res.status(401).json({ error: errMsg });
    } 

    try {
        passwordHash = await bcrypt.hash(password, saltRounds)
    } catch (err) {
        errMsg = "mandatory field missing field in request";
        logger.error(errMsg);
        return res.status(500).json({ error: errMsg })
    }

    try {


        // TODO: code for user login
    } catch (err) {
        // catch any error
    } 
});

module.exports = router;