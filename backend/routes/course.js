const express = require('express');

const logger = require('../logger/logger');
const Course = require('../models/admin');

const router = express.Router();

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
    } catch {
        errMsg = "encountered error while fetching the courses: " + err;
        logger.error(errMsg);
        return res.status(500).json({ error: errMsg });
    }
});

module.exports = router;