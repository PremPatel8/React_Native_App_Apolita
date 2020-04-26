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
        errMsg = "password encryption failed, err: " + err;
        logger.error(errMsg);
        return res.status(500).json({ error: errMsg })
    }

    try {
        // TODO: add code for signing up user and return 200 OK 
        // on successful creation of user in the DB
    } catch (err) {
        // catch any error
    } 
});

router.post("/login", async (req, res) => {
    const { email, password } = req.body;
    if (!(email || password)) {
        errMsg = "mandatory field missing field in request";
        logger.error(errMsg);
        return res.status(401).json({ error: errMsg });
    }
    
    try {
        // TODO: code to authenticate the user 
    } catch {
        // catch any error
    }
});  

module.exports = router;