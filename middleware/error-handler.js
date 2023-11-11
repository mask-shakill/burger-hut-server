// errorHandler.js
const errorHandler = (err, req, res, next) => {
  console.error(err.stack);

  // Check for Mongoose validation errors
  if (err.name === "ValidationError") {
    return res.status(400).json({ error: err.message });
  }

  // Handle other types of errors
  res.status(500).json({ error: "Something went wrong" });
};

module.exports = errorHandler;
