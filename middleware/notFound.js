// Middleware function for handling "not found" errors.
// It creates a new Error object with a custom message ('NOT found!').
// The `error.status` property is set to 404, indicating a "Not Found" HTTP status.
// The `next(error)` function passes the error to the next middleware in the stack (typically an error handler).
const notFound = (req, res, next) => {
    const error = new Error('NOT found!'); // Creating a 404 error object with a custom message.
    error.status = 404;                   // Setting the HTTP status to 404 (Not Found).
    next(error);                          // Passing the error to the next middleware in the stack.
};

// Exporting the "not found" middleware function for reuse in other parts of the application.
// This promotes modularity and ensures the function can be tested or used in multiple projects.
export default notFound;