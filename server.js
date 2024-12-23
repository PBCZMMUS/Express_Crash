const express = require('express');
const path = require('path');

const app = express();

const PORT = 3000;

// Use the 'express.static' middleware to serve static files like HTML, CSS, JavaScript, and images.
// The 'path.join(__dirname, 'public')' sets the directory where static files are located.
// Any file in the 'public' folder can be accessed directly via the URL without defining specific routes.
// For example, if 'public' contains 'style.css', it can be accessed at 'http://localhost:<PORT>/style.css'.
app.use(express.static(path.join(__dirname, 'public')));

// app.get('/', (req, res) => {
//     res.send("Hello World!");
// });

// app.get('/home', (req, res) => {
//     res.sendFile(path.join(__dirname, 'public', 'index.html'));
// });

// app.get('/about', (req, res) => {
//     res.sendFile(path.join(__dirname, 'public', 'about.html'));
// });

app.listen(PORT, () => console.log(`Server is running on PORT ${PORT} . . .`));