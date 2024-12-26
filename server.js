import express from 'express';
import cors from 'cors';
import path from 'path';
// Importing the `fileURLToPath` method from the 'url' module.
// This method converts a file URL to a file path string.
import { fileURLToPath } from 'url';
import posts from './routes/posts.js';
import logger from './middleware/logger.js';
import errorHandler from './middleware/error.js';
import notFound from './middleware/notFound.js';


const PORT = process.env.PORT || 3000;

// Get directory name
// Using `fileURLToPath` to determine the file path of the current module.
// `import.meta.url` provides the URL of the current module in ES6 modules.
// The `fileURLToPath` function converts this URL into an absolute file system path.
const __filename = fileURLToPath(import.meta.url);

// Logging the absolute file path of the current module for debugging purposes.
// Uncomment the following line if you want to see the path in the console.
// console.log(__filename);

// Using the `path.dirname` method to get the directory name of the current module's file.
// Since ES6 modules do not natively support __dirname, this is a workaround.
const __dirname = path.dirname(__filename);

// Note: This approach mimics CommonJS behavior in ES modules by defining `__filename`
// (the current file path) and `__dirname` (the current directory path).

const app = express();

app.use(cors());

app.use(express.json()); 

app.use(express.urlencoded({ extended: true })); 

app.use(logger);

// __dirname is not defined in ES module scope
app.use(express.static(path.join(__dirname, 'public')));

app.use('/api/posts', posts);

app.use(notFound);

app.use(errorHandler);



app.listen(PORT, '0.0.0.0', () => console.log(`Server is running on PORT ${PORT} . . .`));