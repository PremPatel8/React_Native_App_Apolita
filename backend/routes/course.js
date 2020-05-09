const express = require('express');

const logger = require('../logger/logger');
const Course = require('../models/course');

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
    } catch (err) {
        errMsg = "encountered error while fetching the courses: " + err;
        logger.error(errMsg);
        return res.status(500).json({ error: errMsg });
    }
});

router.get("/api/course/:id", async(req, res) => {
    const courseID = req.params.id
    
    // console.log(courseID)
    
    //change public to the name of the directory where all the assessts are stored on your system
    var folderPath = path.join(__dirname,'..', 'public', courseID)
    
    // console.log(folderPath)
    try {
        const arrayOfFiles = getAllFiles(folderPath)
        // console.log(arrayOfFiles)
        res.send(arrayOfFiles)
      } catch(e) {
        console.log(e)
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