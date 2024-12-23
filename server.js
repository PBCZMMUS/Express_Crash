const express = require('express');
const path = require('path');

const app = express();

const PORT = 3000;

app.use(express.static(path.join(__dirname, 'public')));

// Define an array of posts with unique IDs and titles
let posts = [
    { id: 1, title: "Post One" }, // Post with ID 1
    { id: 2, title: "Post Two" }, // Post with ID 2
    { id: 3, title: "Post Three" } // Post with ID 3
];

// Define a GET route at '/api/posts' to return all posts
app.get('/api/posts', (req, res) => {
    // Send the 'posts' array as a JSON response to the client
    res.json(posts);
    
    // Alternatively, 'res.send(posts)' could also be used to send the data.
    // res.send(posts); // Uncomment if you want to use 'send' instead of 'json'
});

app.listen(PORT, () => console.log(`Server is running on PORT ${PORT} . . .`));