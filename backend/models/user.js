const db = require("../persistence/db_conn");

// constructor for User schema
const User = function(user) {
    this.firstname = user.firstname;
    this.lastname = user.lastname;
    this.email = user.email;
    this.password = user.password;
    this.gender = user.gender;
    this.phonenumber = user.phonenumber;
    this.city = user.city;
    this.country = user.country;
};

// @parameters:
// newUser: new user object as per above user model 
// result: callback function to call with the result of this function at the end
User.create = (newUser, result) => {
    db.create("INSERT INTO customers SET ?", newCustomer, (err, res) => {
        if (err) {
            logger.error("failed to create new user, err: ", err);
            result(err, null);
            return;
        }
    
        logger.info("successfully created new user: ", { id: res.insertId, ...newCustomer });
        result(null, { id: res.insertId, ...newCustomer });
    });
};

// @parameters:
// email: email of the user under consideration 
// result: callback function to call with the result of this function at the end
User.findByEmail = (email, result) => {
    db.query(`SELECT * FROM users WHERE email = ${email}`, (err, res) => {
        if (err) {
            logger.error("failed to find given user, err: ", err);
            result(err, null);
            return;
        }
    
        if (res.length) {
            logger.info("found user with email provided: ", res[0]);
            result(null, res[0]);
            return;
        }
    
        // couldn't find user with the given email
        result({ kind: "not_found" }, null);
    });
};

module.exports = User;