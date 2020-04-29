const express = require('express');
const bcrypt = require("bcrypt");

// const middleware = require("../middlewares/middleware.js");
const logger = require('../logger/logger');
const User = require('../models/user.js');

const router = express.Router();
const saltRounds = 10;

router.post("/signup", async (req, res) => {
    if (!req.body) {
        errMsg = "request body cannot be empty for POST route: /signup";
        logger.error(errMsg);
        return res.status(400).json({ error: errMsg });
    }

    if (!(req.body.firstname || req.body.lastname || req.body.email || req.body.password || req.body.gender || req.body.phonenumber || req.body.city || req.body.country)) {
        errMsg = "mandatory field missing field in request";
        logger.error(errMsg);
        return res.status(401).json({ error: errMsg });
    } 

    try {
        passwordHash = await bcrypt.hash(password, saltRounds)

        const user = new User({
            firstname : req.body.firstname,
            lastname : req.body.lastname,
            email : req.body.email,
            password : req.body.password,
            gender : req.body.gender,
            phonenumber : req.body.phonenumber,
            city : req.body.city,
            country : req.body.country,
        });

        User.create(user, (err, data) => {
            if (err) {
                res.status(500).send({
                    message: err.message || "Some error occurred while creating the Customer."
                });
            } 
            
            res.send(data);
          });
    } catch (err) {
        errMsg = "password encryption failed, err: " + err;
        logger.error(errMsg);
        return res.status(500).json({ error: errMsg });
    } 
});

router.post("/login", async (req, res) => {
    if (!req.body) {
        errMsg = "request body cannot be empty for POST route: /login";
        logger.error(errMsg);
        return res.status(400).json({ error: errMsg });
    }

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