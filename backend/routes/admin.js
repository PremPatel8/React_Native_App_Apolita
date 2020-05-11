const express = require('express');

const logger = require('../logger/logger');
const Course = require('../models/course');
const Announcement = require('../models/announcement');

const router = express.Router();

router.post("/addcourse", async (req, res) => {
    if (!req.body) {
        errMsg = "request body cannot be empty for POST route: /admin/addcourse";
        logger.error(errMsg);
        return res.status(400).json({ error: errMsg });
    }

    if (!(req.body.title || req.body.description || req.body.image)) {
        errMsg = "mandatory field missing field in request";
        logger.error(errMsg);
        return res.status(401).json({ error: errMsg });
    }

    try {
        const course = new Course({
            title: req.body.title,
            description: req.body.description,
            image: req.body.image,
        });

        Course.create(course, (err, data) => {
            if (err) {
                logger.error(err.message);
                res.status(500).json({
                    message: err.message || "encountered error while creating the course."
                });
            } else return res.status(200).json(data);
        });
    } catch (err) {
        errMsg = "encountered error while creating the course: " + err;
        logger.error(errMsg);
        return res.status(500).json({ error: errMsg });
    }
});

router.post("/addannouncement", async (req, res) => {
    if (!req.body) {
        errMsg = "request body cannot be empty for POST route: /admin/addannouncement";
        logger.error(errMsg);
        return res.status(400).json({ error: errMsg });
    }

    if (!(req.body.title || req.body.description)) {
        errMsg = "mandatory field missing field in request";
        logger.error(errMsg);
        return res.status(401).json({ error: errMsg });
    }

    try {
        const announcement = new Announcement({
            title: req.body.title,
            description: req.body.description,
        });

        Announcement.create(announcement, (err, data) => {
            if (err) {
                logger.error(err.message);
                res.status(500).json({
                    message: err.message || "encountered error while creating the announcement."
                });
            } else return res.status(200).json(data);
        });
    } catch (err) {
        errMsg = "encountered error while creating the announcement: " + err;
        logger.error(errMsg);
        return res.status(500).json({ error: errMsg });
    }
});

module.exports = router;