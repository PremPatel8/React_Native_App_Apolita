const db = require("../persistence/db_conn");
const logger = require('../logger/logger');

// States of courses in the database
// At the time of course-creation, 'active' field is set to 1
const courseStateInactive = 0;
const courseStateActive = 1;

// constructor for Course schema
const Course = function(course) {
    this.title = course.name;
    this.description = course.description;
    this.image = course.image;
    this.isActive = courseStateActive;
};

// @parameters:
// newCourse: new course object as per above course model 
// result: callback function to call with the result of this function at the end
Course.create = (newCourse, result) => {
    db.query("INSERT INTO courses SET ?", newCourse, (err, res) => {
        if (err) {
            logger.error("failed to create new course, err: ", err);
            result(err, null);
            return;
        }
    
        logger.info("successfully created new course");
        result(null, { id: res.insertId, ...newCourse });
    });
};

// @parameters:
// courseID: UniqueID of the course under consideration 
// result: callback function to call with the result of this function at the end
Course.findByCourseID = (courseID, result) => {
    db.query(`SELECT * FROM courses WHERE id = '${courseID}'`, (err, res) => {
        if (err) {
            result(err, null);
            return;
        }
    
        if (res.length) {
            result(null, res[0]);
            return;
        }
    
        // couldn't find course with the given courseID
        result({ kind: "not_found" }, null);
    });
};

// @parameters: 
// result: callback function to call with the result of this function at the end
Course.fetchAll = (result) => {
    db.query(`SELECT * FROM courses`, (err, res) => {
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

module.exports = Course;