const express = require('express');

const router = express.Router();

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