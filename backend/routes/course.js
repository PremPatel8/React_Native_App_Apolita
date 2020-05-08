const express = require('express');

const router = express.Router();

const fs = require("fs")

var path = require('path');

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