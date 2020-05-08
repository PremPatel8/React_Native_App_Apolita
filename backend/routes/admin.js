const express = require('express');

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

    } catch {
        
    }

});

module.exports = router;