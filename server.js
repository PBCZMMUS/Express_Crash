const express = require('express');
const path = require('path');
const posts = require('./routes/posts');
const PORT = process.env.PORT || 3000;

const app = express();

// Serve static files from the "public" directory
app.use(express.static(path.join(__dirname, 'public')));

// Use posts router for "/api/posts" endpoint
app.use('/api/posts', posts);

app.listen(PORT, () => console.log(`Server is running on PORT ${PORT} . . .`));