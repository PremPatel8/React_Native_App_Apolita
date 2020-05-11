const db = require("../persistence/db_conn");
const logger = require('../logger/logger');

// constructor for User schema
const User = function(user) {
    this.firstname = user.firstname;
    this.lastname = user.lastname;
    this.email = user.email;
    this.password = user.password;
    this.gender = user.gender;
    this.phonenumber = user.phonenumber;
    this.city = user.city;
    this.state = user.state;
    this.country = user.country;
};

// @parameters:
// newUser: new user object as per above user model 
// result: callback function to call with the result of this function at the end
User.create = (newUser, result) => {
    db.query("INSERT INTO users SET ?", newUser, (err, res) => {
        if (err) {
            logger.error("failed to create new user, err: ", err);
            result(err, null);
            return;
        }
    
        logger.info("successfully created new user");
        result(null, { id: res.insertId, ...newUser });
    });
};

// @parameters:
// email: email of the user under consideration 
// result: callback function to call with the result of this function at the end
User.findByEmail = (email, result) => {
    db.query(`SELECT * FROM users WHERE email = '${email}'`, (err, res) => {
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

User.findByEmailPassword = (email1, password1, result) => {
//    console.log(password1)
    db.query(`SELECT * FROM users WHERE email = '${email1}' and password = '${password1}'`, (err, res) => {
//        console.log(err)
//        console.log(res[0])
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

User.resetByEmail = (email2, password2, result) => {
    db.query(`UPDATE users SET password = '${password2}' WHERE email = '${email2}'`, (err, res) => {
        if (res.affectedRows == 0) {
            err = 'not_found'
            result(err, null);
            return;
        }
    
        if (res.affectedRows > 0) {
            console.log('send')
            result(null, res[0]);
            return;
        }
    
        // couldn't find user with the given email
        result({ kind: "not_found" }, null);
    });
};

User.fetchAllStudents = (result) => {
    db.query(`SELECT * FROM users where role_id = '2'`, (err, res) => {
        if (err) {
            result(err, null);
            return;
        }
    
        if (res.length) {
            result(null, res);
            return;
        }
    
        // couldn't find user with the given email
        result({ kind: "not_found" }, null);
    });
};

module.exports = User;