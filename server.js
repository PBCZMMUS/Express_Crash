import express from 'express';
import path from 'path';
import posts from './routes/posts.js';

// Importing the logger middleware from a separate file (logger.js) located in the middleware folder.
import logger from './middleware/logger.js';

// Importing the error handling middleware function from the error.js file.
// This function is used to catch and handle application errors.
import errorHandler from './middleware/error.js';

// Importing the "not found" middleware function from the notFound.js file.
// This function is specifically designed to handle requests made to undefined routes.
import notFound from './middleware/notFound.js';


const PORT = process.env.PORT || 3000;

const app = express();

// Parse incoming JSON requests and add the parsed data to `req.body`
// This is used for handling raw JSON payloads in requests like POST or PUT.
app.use(express.json()); 

// Parse incoming requests with URL-encoded payloads (from HTML forms or similar sources)
// Setting `{ extended: true }` allows parsing nested objects in URL-encoded data.
app.use(express.urlencoded({ extended: true })); 

// Applying the logger middleware to the app using app.use().
// This middleware will log details (e.g., method, protocol, URL) for every incoming request.
// The logger function must call `next()` to pass control to the next middleware in the stack.
app.use(logger);

// __dirname is not defined in ES module scope
// app.use(express.static(path.join(__dirname, 'public')));

// Use posts router for "/api/posts" endpoint
app.use('/api/posts', posts);

// app.use((req, res, next) => {
//     const error = new Error ('NOT found!')
//     error.status = 404;
//     next(error);
// })

// Adding the "not found" middleware to the middleware stack using app.use().
// This middleware runs for any request that doesn't match an existing route.
// It creates a 404 error and passes it to the next middleware (error handler).
app.use(notFound);

// Adding the error handling middleware to the middleware stack using app.use().
// This middleware catches errors passed via `next(error)` and sends a proper response to the client.
// It ensures that any application errors are handled in a unified manner.
app.use(errorHandler);

app.listen(PORT, () => console.log(`Server is running on PORT ${PORT} . . .`));