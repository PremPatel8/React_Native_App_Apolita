const db = require("../persistence/db_conn");
const logger = require('../logger/logger');

// constructor for Announcment schema
const Announcement = function(course) {
    this.title = course.title;
    this.description = course.description;
};

// @parameters:
// newCourse: new course object as per above course model 
// result: callback function to call with the result of this function at the end
Announcement.create = (newAnnouncement, result) => {
    db.query("INSERT INTO announcements SET ?", newAnnouncement, (err, res) => {
        if (err) {
            logger.error("failed to create new announcement, err: ", err);
            result(err, null);
            return;
        }
    
        logger.info("successfully created new announcement");
        result(null, { id: res.insertId, ...newAnnouncement });
    });
};

// @parameters:
// announcementID: UniqueID of the announcement under consideration 
// result: callback function to call with the result of this function at the end
Announcement.findByCourseID = (announcementID, result) => {
    db.query(`SELECT * FROM announcements WHERE id = '${announcementID}'`, (err, res) => {
        if (err) {
            result(err, null);
            return;
        }
    
        if (res.length) {
            result(null, res[0]);
            return;
        }
    
        // couldn't find course with the given announcementID
        result({ kind: "not_found" }, null);
    });
};

// @parameters: 
// result: callback function to call with the result of this function at the end
Announcement.fetchAll = (result) => {
    db.query(`SELECT * FROM announcements`, (err, res) => {
        if (err) {
            result(err, null);
            return;
        }
    
        if (res.length) {
            result(null, res);
            return;
        }
    
        // course list is empty
        result(null, null);
    });
};

module.exports = Announcement;