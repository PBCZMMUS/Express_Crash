// Define a middleware function named `logger`
const logger = (req, res, next) => {
    // Log the HTTP method (e.g., GET, POST), protocol (e.g., http), host (e.g., localhost:3000),
    // and the original URL of the incoming request
    console.log(
      `${req.method} ${req.protocol}://${req.get("host")}${req.originalUrl}`
    );
  
    // Call `next()` to pass control to the next middleware in the stack
    // Without this, the request would hang and not proceed
    next();
  };

  // Exporting the logger middleware so it can be reused in other parts of the application or tests.
// This allows modularity and avoids duplicating the logger logic in multiple files.
export default logger;