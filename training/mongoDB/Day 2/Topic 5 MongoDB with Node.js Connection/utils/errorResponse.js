// ============================================================
// Topic 10 Advanced Task 2: Reusable error response format
// ============================================================

/**
 * Creates a standardized error response object.
 * Used across all controllers for consistent API error formatting.
 *
 * @param {object} res - Express response object
 * @param {number} statusCode - HTTP status code (400, 404, 500, etc.)
 * @param {string} message - Error message
 */
const errorResponse = (res, statusCode, message) => {
  return res.status(statusCode).json({
    success: false,
    error: message,
  });
};

module.exports = errorResponse;
