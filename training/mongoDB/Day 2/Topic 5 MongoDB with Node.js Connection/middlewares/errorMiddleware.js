const errorResponse = require("../utils/errorResponse");

const errorHandler = (err, _req, res, _next) => {
  console.error(err);

  if (err.name === "CastError") {
    return errorResponse(res, 400, "Invalid resource id");
  }

  if (err.code === 11000) {
    const duplicateField = Object.keys(err.keyValue)[0];
    return errorResponse(res, 400, `${duplicateField} already exists`);
  }

  if (err.name === "ValidationError") {
    const message = Object.values(err.errors)
      .map((item) => item.message)
      .join(", ");

    return errorResponse(res, 400, message);
  }

  return errorResponse(res, err.statusCode || 500, err.message || "Internal server error");
};

module.exports = errorHandler;
