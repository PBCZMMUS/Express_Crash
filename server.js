import express from 'express';
import path from 'path';
import posts from './routes/posts.js';

const PORT = process.env.PORT || 3000;

const app = express();

// __dirname is not defined in ES module scope
// app.use(express.static(path.join(__dirname, 'public')));

// Use posts router for "/api/posts" endpoint
app.use('/api/posts', posts);

app.listen(PORT, () => console.log(`Server is running on PORT ${PORT} . . .`));