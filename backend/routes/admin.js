const express = require('express');

const logger = require('../logger/logger');
const Course = require('../models/admin');

const router = express.Router();

router.post("/addcourse", async (req, res) => {
    if (!req.body) {
        errMsg = "request body cannot be empty for POST route: /admin/addcourse";
        logger.error(errMsg);
        return res.status(400).json({ error: errMsg });
    }

    if (!(req.body.name || req.body.description || req.body.image)) {
        errMsg = "mandatory field missing field in request";
        logger.error(errMsg);
        return res.status(401).json({ error: errMsg });
    }

    try {
        const course = new Course({
            name: req.body.name,
            description: req.body.description,
            image: req.body.image,
        });

        Course.create(course, (err, data) => {
            if (err) {
                logger.error(err.message);
                res.status(500).json({
                    message: err.message || "encountered error while creating the course."
                });
            }

            return res.status(200).json(data);
        });
    } catch {
        errMsg = "encountered error while creating the course: " + err;
        logger.error(errMsg);
        return res.status(500).json({ error: errMsg });
    }
});

router.post("/fetchallcourse", async (req, res) => {
    if (!req.body) {
        errMsg = "request body cannot be empty for POST route: /admin/addcourse";
        logger.error(errMsg);
        return res.status(400).json({ error: errMsg });
    }

});

module.exports = router;