// Import the Express library for creating a web server
const express = require('express');

// Import the built-in 'path' module for handling and transforming file paths
const path = require('path');

// Create an instance of the Express application, which represents the web server
const app = express();

// Define the port number the server will listen on
const PORT = 3000;

// Define a route for the root URL ('/').
// When a GET request is made to the root URL, the server responds with a simple message or HTML content.
app.get('/', (req, res) => {
    res.send("Hello World!"); // Responds with plain text: "Hello World!"
    // Uncomment the following line to send an HTML response instead:
    // res.send("<h1>Hello World!</h1>");
    // Uncomment the following line to send a JSON response instead:
    // res.send({ msg: `Hello World!` });
});

// Define a route for the '/home' URL.
// When a GET request is made to '/home', the server sends the `index.html` file located in the 'public' folder.
app.get('/home', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html')); // Sends the 'index.html' file as the response.
    console.log(__dirname); // Logs the absolute directory path to the console for debugging purposes.
});

// Define a route for the '/about' URL.
// When a GET request is made to '/about', the server sends the `about.html` file located in the 'public' folder.
app.get('/about', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'about.html')); // Sends the 'about.html' file as the response.
});

// Start the server and make it listen on the defined port.
// Once the server starts, log a message indicating it is running and on which port.
app.listen(PORT, () => console.log(`Server is running on PORT ${PORT} . . .`));