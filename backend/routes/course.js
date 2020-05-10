const express = require('express');
const logger = require('../logger/logger');
const Course = require('../models/course');
const router = express.Router();

const fs = require("fs")
var path = require('path');

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

// Returns a list of paths for all the files associated with a particular courseID
router.get("/coursematerial/:id", async(req, res) => {
    const courseID = req.params.id
    
    //change public to the name of the directory where all the assessts are stored on your system
    var folderPath = path.join(__dirname,'..', 'public', courseID)
    
    try {
        const arrayOfFiles = getAllFiles(folderPath)

        res.send(arrayOfFiles)
      } catch(e) {
        errMsg = `encountered error while fetching course materials - ${e}`;
        logger.error(errMsg);
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