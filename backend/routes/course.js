const express = require('express');
const logger = require('../logger/logger');
const Course = require('../models/course');
const router = express.Router();
const fs = require("fs")
var path = require('path');

router.get("/coursedetails/:courseid", async (req, res) => {
    try {
        const courseid = req.params.courseid;
        
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
            } else if (data) {
                return res.status(200).json(data);  
            } else {
                return res.status(200).json([]);
            }
        });
    } catch (err) {
        errMsg = "encountered error while fetching the courses: " + err;
        logger.error(errMsg);
        return res.status(500).json({ error: errMsg });
    }
});

// Returns a list of paths for all the files associated with a particular courseID
router.get("/coursematerial/:id", async(req, res) => {
    try {
        const courseID = req.params.id
        
        Course.findByCourseID(courseID, (err, data) => {
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
                var folderPath = path.join(__dirname,'..', 'public', data.title)
                
                try {
                    const arrayOfFiles = getAllFiles(folderPath)
                    
                    res.send(arrayOfFiles)
                } catch(e) {
                    errMsg = `encountered error while fetching course materials - ${e}`;
                    logger.error(errMsg);
                } 
            }
        });
    } catch (err) {
        errMsg = "encountered error while fetching the courses: " + err;
        logger.error(errMsg);
        return res.status(500).json({ error: errMsg });
    }
});

const getAllFiles = function(dirPath, arrayOfFiles) {
    files = fs.readdirSync(dirPath)
    arrayOfFiles = arrayOfFiles || []
    files.forEach(function(file) {
        if (fs.statSync(dirPath + "/" + file).isDirectory()) {
            arrayOfFiles = getAllFiles(dirPath + "/" + file, arrayOfFiles)
        } else {
            arrayOfFiles.push(path.join(dirPath, "/", file))
        }
    })
    return arrayOfFiles
}

module.exports = router;