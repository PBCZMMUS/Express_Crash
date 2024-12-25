import colors from 'colors';

// Define a middleware function named `logger`
const logger = (req, res, next) => {
  // Map HTTP methods to corresponding colors
  const methodColors = {
    GET: 'green',
    POST: 'blue',
    PUT: 'yellow',
    DELETE: 'red'
  };

  // Determine the color for the current request method
  const color = methodColors[req.method] || 'white';

  // Log the request method, protocol, host, and URL, applying the appropriate color
  console.log(
    colors[color](
      `${req.method} ${req.protocol}://${req.get("host")}${req.originalUrl}`
    )
  );

  // Call next() to pass control to the next middleware in the stack
  next();
};

export default logger;