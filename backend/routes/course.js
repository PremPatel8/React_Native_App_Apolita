const express = require('express');

const logger = require('../logger/logger');
const Course = require('../models/course');

const router = express.Router();

router.get("/courseid", async (req, res) => {
    try {
        Course.findByCourseID(courseid, (err, data) => {
            if ( err ) {
                if (err.kind === "not_found") {
                    errMsg = `no course found with courseid: ${courseid}`;
                    logger.error(errMsg);
                    return res.status(404).json({ error: errMsg });
               } else {
                    errMsg = `encountered error while fetching course with courseid: ${courseid}`;
                    logger.error(errMsg);
                    return res.status(500).json({ error: errMsg });
                }
            } else {
                return res.status(200).json(data);
            }
        });
    } catch (err) {
        errMsg = "encountered error while fetching the courses: " + err;
        logger.error(errMsg);
        return res.status(500).json({ error: errMsg });
    }
});

router.get("/fetchall", async (req, res) => {
    try {
        Course.fetchAll((err, data) => {
            if ( err ) {
                errMsg = `encountered error while fetching courses`;
                logger.error(errMsg);
                return res.status(500).json({ error: errMsg });
            }

            if (data) {
                return res.status(200).json(data);  
            }

            return res.status(200).json([]);
        });
    } catch (err) {
        errMsg = "encountered error while fetching the courses: " + err;
        logger.error(errMsg);
        return res.status(500).json({ error: errMsg });
    }
});

module.exports = router;