const express = require('express');

const logger = require('../logger/logger');
const Announcemnt = require('../models/announcement');

const router = express.Router();

router.get("/fetchall", async (req, res) => {
    try {
        Announcemnt.fetchAll((err, data) => {
            if ( err ) {
                errMsg = `encountered error while fetching announcements`;
                logger.error(errMsg);
                return res.status(500).json({ error: errMsg });
            } else if (data) {
                return res.status(200).json(data);  
            } else return res.status(200).json([]);
        });
    } catch (err) {
        errMsg = "encountered error while fetching the announcements: " + err;
        logger.error(errMsg);
        return res.status(500).json({ error: errMsg });
    }
});

module.exports = router;