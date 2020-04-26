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
