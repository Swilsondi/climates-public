// Centralized error handler for 500 and other errors
const errorHandler = (err, req, res, next) => {
  console.error(err.stack); // Log the error stack trace for debugging
  res.status(500).json({
    success: false,
    message: "Internal Server Error",
    error: err.message || "An unexpected error occurred",
  });
};

// This middleware should be used after all other routes and middlewares

module.exports = errorHandler;
