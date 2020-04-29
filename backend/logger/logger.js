const Logger = function () {};

Logger.prototype.info = function (logText) {
  console.log(`[INFO]   ${new Date()} - ${logText}`);
};

Logger.prototype.debug = function (logText) {
  console.log(`[DEBUG]  ${new Date()} - ${logText}`);
};

Logger.prototype.error = function (logText) {
  console.log(`[ERROR]  ${new Date()} - ${logText}`);
};

module.exports = new Logger();