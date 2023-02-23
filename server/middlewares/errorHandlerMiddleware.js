const errorHandlerMiddleware = (err, req, res, next) => {
  const statusCode = res.statusCode ? res.statusCode : 500;
  res.status(statusCode);

  res.json({
    message: err.message,
    stack: process.env.NODE_ENVIRONMENT !== "development" ? null : err.stack,
  });

  next();
};

module.exports = errorHandlerMiddleware;
