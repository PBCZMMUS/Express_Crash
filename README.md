# User Manual for the CRUD App

## Overview

    This application allows users to perform basic CRUD (Create, Read, Update, Delete) operations on posts. The app includes functionalities to:
        •	Add a new post.
        •	View all posts.
        •	Edit an existing post.
        •	Delete a post.
        •	Sort the list of posts alphabetically.

    It consists of a front-end (HTML, CSS, JS) for user interaction and a back-end built with Express.js for data management.

## Prerequisites

    Before using this app, ensure you have the following installed:
        •	Node.js: A JavaScript runtime for building server-side applications. Install Node.js
        •	Text Editor: A code editor like VSCode, Sublime, or Atom to edit the source code if needed.
        •	A Web Browser: Google Chrome, Firefox, or any other modern browser for accessing the app.

## Features

    1. Home Page

    When you first visit the app, you’ll land on the Home page, where you can:
        •	View the list of all posts.
        •	Add a new post.
        •	Edit an existing post.
        •	Delete a post.
        •	Sort the list of posts alphabetically.

    2. Add Post

    To add a post:
        1.	Enter a title in the input field.
        2.	Click the Add Post button.

    Your post will be added to the list below, and you’ll receive a confirmation message that the post was successfully added.

    3. Edit Post

    To edit an existing post:
        1.	Click the Update button next to the post you want to edit.
        2.	A prompt will appear asking you to enter a new title for the post.
        3.	Enter the new title and click OK.
        4.	The post will be updated on the list.

    4. Delete Post

    To delete a post:
        1.	Click the Delete button next to the post you want to remove.
        2.	The post will be removed from the list immediately.

    5. Sort Posts

    To sort posts alphabetically:
        1.	Click the Sort Posts button located at the top of the post list.
        2.	The posts will be sorted alphabetically by their title.

## How to Run the App

    1. Clone or Download the Repository

    Clone or download the app’s repository to your local machine:
    git clone <repository_url>

    2. Install Dependencies

    Open a terminal in the app’s root directory and install the dependencies using npm:
    npm install

    3. Set Up Environment Variables

    Create a .env file in the root directory of the app. Add any required environment variables (if any). Here’s an example:
    PORT=3000

    4. Start the Server

    Once the dependencies are installed, you can start the server by running:
    npm start

    The server will start on the port specified in the .env file (default is 3000), and you can access the app by navigating to http://localhost:3000 in your web browser.

    Directory Structure
    •	public/: Contains the static files, such as HTML, CSS, and JavaScript, used for the frontend.
    •	index.html: The home page of the application.
    •	about.html: The about page.
    •	contact.html: The contact page.
    •	styles.css: The CSS file to style the app’s pages.
    •	script.js: Contains the JavaScript code for handling CRUD operations and frontend logic.
    •	routes/: Contains route handlers for various API endpoints.
    •	posts.js: Manages routes for fetching, adding, updating, and deleting posts.
    •	middleware/: Contains middleware used in the app.
    •	logger.js: Logs incoming requests to the server.
    •	errorHandler.js: Handles errors globally in the app.
    •	server.js: The main Express server file that initializes the server and connects the routes, middleware, and static files.
    •	.env: Contains environment variables (e.g., port).

    Technical Instructions

Frontend

The frontend is built with HTML, CSS, and JavaScript:
• HTML: The structure of the pages (index.html, about.html, contact.html).
• CSS: Styles the pages, buttons, and layout.
• JavaScript: Handles CRUD operations, manages DOM manipulation, and interacts with the backend API.

Key JavaScript Functions
• Add Post: Submits a POST request to the /api/posts endpoint to add a new post.
• Fetch Posts: Fetches all posts from the server and updates the post list on the page.
• Edit Post: Sends a PUT request to update the post title.
• Delete Post: Sends a DELETE request to remove a post.
• Sort Posts: Sorts the list of posts alphabetically.

Backend

The backend is built with Express.js:
• API Routes: Routes for handling CRUD operations for posts.
• POST /api/posts: Adds a new post.
• GET /api/posts: Fetches all posts.
• PUT /api/posts/:id: Updates a post by its ID.
• DELETE /api/posts/:id: Deletes a post by its ID.

Middleware

The app uses two middleware functions: 1. Logger Middleware: Logs requests made to the server. 2. Error Handler Middleware: Catches errors thrown by any routes and sends a consistent error response.

    Troubleshooting

1. API Not Working
   • Ensure the server is running correctly by checking the terminal for any errors.
   • Make sure you have internet access if you’re using any external APIs.

2. Posts Not Displaying
   • Check if the fetchPosts function is being called correctly on page load.
   • Open the browser’s developer tools (F12) and look for any JavaScript errors in the console.

3. Server Not Starting
   • Verify that all dependencies are installed correctly by running npm install in the root folder.
   • Check the .env file for any missing or incorrect environment variables.

   Conclusion

This app provides a simple and effective way to manage posts with basic CRUD operations. It uses Express.js for the backend API and HTML/CSS/JS for the frontend. By following this manual, users should be able to run, interact with, and troubleshoot the application effectively.
