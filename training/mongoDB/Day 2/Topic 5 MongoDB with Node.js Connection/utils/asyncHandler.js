// ============================================================
// Topic 10 Advanced Task 4: Helper for async error handling
// ============================================================

/**
 * Wraps an async route handler so that any thrown error
 * is automatically passed to Express's next() error handler.
 * Eliminates the need for try-catch in every single route.
 *
 * Usage: router.get("/interns", asyncHandler(async (req, res) => { ... }));
 */
const asyncHandler = (fn) => (req, res, next) => {
  Promise.resolve(fn(req, res, next)).catch(next);
};

module.exports = asyncHandler;
