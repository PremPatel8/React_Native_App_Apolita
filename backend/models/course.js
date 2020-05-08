const db = require("../persistence/db_conn");
const logger = require('../logger/logger');

// constructor for Course schema
const Course = function(course) {
    this.name = user.name;
    this.description = user.description;
    this.image = user.image;
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
    
        logger.info("successfully created new user");
        result(null, { id: res.insertId, ...newCourse });
    });
};

// @parameters:
// courseID: UniqueID of the course under consideration 
// result: callback function to call with the result of this function at the end
Course.findByCourseID = (courseID, result) => {
    db.query(`SELECT * FROM courses WHERE email = '${courseID}'`, (err, res) => {
        if (err) {
            result(err, null);
            return;
        }
    
        if (res.length) {
            result(null, res[0]);
            return;
        }
    
        // couldn't find user with the given email
        result({ kind: "not_found" }, null);
    });
};

// @parameters: 
// result: callback function to call with the result of this function at the end
Course.fetchAll = (courseID, result) => {
    db.query(`SELECT * FROM courses`, (err, res) => {
        if (err) {
            result(err, null);
            return;
        }
    
        if (res.length) {
            result(null, res[0]);
            return;
        }
    
        // couldn't find user with the given email
        result({ kind: "not_found" }, null);
    });
};

module.exports = Course;