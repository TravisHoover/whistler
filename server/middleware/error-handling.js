const logger = require('../lib/logger');

module.exports = () =>
  (err, req, res, next) => {
    res.statusCode = err.status || 500;
    res.body = { error: err.message };
    if (res.statusCode >= 500) {
      req.error = err;
      logger.error({
        error: req,
      });
      req.body = { error: 'Internal Error' };
    }
    next();
  };
