const mysql = require("mysql");

const dbConfig = require("../config/db.config.js");
const logger = require('./logger/logger');

// Create a connection to the database
const connection = mysql.createConnection({
    host: dbConfig.HOST,
    user: dbConfig.USER,
    password: dbConfig.PASSWORD,
    database: dbConfig.DB
});

// open the MySQL connection
connection.connect(err => {
    if (err) {
        logger.error("failed to connect to the database, err: ", err);
    };
    logger.info("Successfully connected to the database.");
});

module.exports = connection;