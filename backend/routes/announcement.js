const express = require('express');

const logger = require('../logger/logger');
const Announcemnt = require('../models/announcement');

const router = express.Router();

router.get("/announcementid", async (req, res) => {
    try {
        Announcemnt.findByAnnouncementID(announcementid, (err, data) => {
            if ( err ) {
                if (err.kind === "not_found") {
                    errMsg = `no announcement found with courseid: ${announcementid}`;
                    logger.error(errMsg);
                    return res.status(404).json({ error: errMsg });
                } else {
                    errMsg = `encountered error while fetching announcement with announcementid: ${announcementid}`;
                    logger.error(errMsg);
                    return res.status(500).json({ error: errMsg });
                }
            } else return res.status(200).json(data);
        });
    } catch (err) {
        errMsg = "encountered error while fetching the courses: " + err;
        logger.error(errMsg);
        return res.status(500).json({ error: errMsg });
    }
});

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