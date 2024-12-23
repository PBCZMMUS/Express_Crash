import express from 'express';
import path from 'path';
import posts from './routes/posts.js';

const PORT = process.env.PORT || 3000;

const app = express();

// Parse incoming JSON requests and add the parsed data to `req.body`
// This is used for handling raw JSON payloads in requests like POST or PUT.
app.use(express.json()); 

// Parse incoming requests with URL-encoded payloads (from HTML forms or similar sources)
// Setting `{ extended: true }` allows parsing nested objects in URL-encoded data.
app.use(express.urlencoded({ extended: true })); 

// __dirname is not defined in ES module scope
// app.use(express.static(path.join(__dirname, 'public')));

// Use posts router for "/api/posts" endpoint
app.use('/api/posts', posts);

app.listen(PORT, () => console.log(`Server is running on PORT ${PORT} . . .`));