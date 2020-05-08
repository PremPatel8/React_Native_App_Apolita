const express = require('express');
const bcrypt = require("bcrypt");

// const middleware = require("../middlewares/middleware.js");
const logger = require('../logger/logger');
const User = require('../models/user.js');

const router = express.Router();
const saltRounds = 10;

router.post("/signup", async (req, res) => {
    if (!req.body) {
        errMsg = "request body cannot be empty for POST route: /user/signup";
        logger.error(errMsg);
        return res.status(400).json({ error: errMsg });
    }

    if (!(req.body.firstname || req.body.lastname || req.body.email || req.body.password || req.body.gender || req.body.phonenumber || req.body.city || req.body.country)) {
        errMsg = "mandatory field missing field in request";
        logger.error(errMsg);
        return res.status(401).json({ error: errMsg });
    } 

    // const passwordHash = await bcrypt.hash(req.body.password, saltRounds)
    try {
        User.findByEmail(req.body.email, (err, data) => {
            if (err && err.kind != "not_found") {
                logger.error(`/routes/user.js, func: findByEmail, err: ${err.message}`);
                return res.status(500).json({
                    message: err.message || "encountered error while creating the user."
                });
            } else {
                const user = new User({
                    firstname : req.body.firstname,
                    lastname : req.body.lastname,
                    email : req.body.email,
                    // password : passwordHash,
                    password : req.body.password,
                    gender : req.body.gender,
                    phonenumber : req.body.phonenumber,
                    city : req.body.city,
                    state : req.body.state,
                    country : req.body.country,
                });

                User.create(user, (err, data) => {
                    if (err) {
                        logger.error(err.message);
                        res.status(500).json({
                            message: err.message || "encountered error while creating the user."
                        });
                    } 
                    
                    return res.status(200).json(data);
                });
            }
        });
    } catch (err) {
        errMsg = "encountered error while creating the user: " + err;
        logger.error(errMsg);
        return res.status(500).json({ error: errMsg });
    } 
});

router.post("/login", async (req, res) => {
    if (!req.body) {
        errMsg = "request body cannot be empty for POST route: /user/login";
        logger.error(errMsg);
        return res.status(400).json({ error: errMsg });
    }

    if (!(req.body.email || req.body.password)) {
        errMsg = "mandatory field missing field in request";
        logger.error(errMsg);
        return res.status(401).json({ error: errMsg });
    }
    
    try {
        User.findByEmail(req.body.email, (err, data) => {
            if ( err && err.kind == "not_found") {
                errMsg = `user not found with email - ${email}`;
                logger.error(errMsg);
                return res.status(401).json({ error: errMsg });
            } else {
                logger.info(`user successfully logged-in using email: ${req.body.email}`);
                return res.status(200).json(data)
            }
        });
    } catch {
        errMsg = "encountered error while logging-in user: " + err;
        logger.error(errMsg);
        return res.status(500).json({ error: errMsg });
    }
});  

router.post("/fetchall", async (req, res) => {
}); 

router.get("/enroll", async (req, res) => {
    const { courseID, userID } = req.body;
    if (!(courseID || userID)) {
        errMsg = "mandatory field missing field in request";
        logger.error(errMsg);
        return res.status(401).json({ error: errMsg });
    }

    try {
        // TODO: code to enroll the user 
    } catch {
        // catch any error
    }
});

module.exports = router;