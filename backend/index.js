const express = require('express');
const bodyParser = require('body-parser');
const cors = require("cors");

const logger = require('./logger/logger');
const studentRoutes = require("./routes/student");
const adminRoutes = require("./routes/admin");
const courseRoutes = require("./routes/course");
const announcementRoutes = require("./routes/announcement");

const PORT = process.env.PORT || 8080;

const app = express();

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use('/admin', adminRoutes);
app.use('/student', studentRoutes);
app.use('/course', courseRoutes);
app.use('/announcement', announcementRoutes);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
// no stacktraces leaked to user unless in development environment
app.use(function (err, req, res, next) {
  logger.error(`backend: unknown route: ${req.originalUrl}`);
  res.status(err.status || 500);
  res.json({ error: err });
});

app.listen(PORT, () => {
  logger.info(`Server is running on port ${PORT}...`);
});