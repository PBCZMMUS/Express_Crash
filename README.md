# Express Course

## Step 1 (Setting Up Server)

    -   Installation:
        -   git init
        -   npm init -y
        -   npm i express --save-dev

    -  Create .gitignore
        -   node_modules
        -   .env

    -  Create server.js
        -   Import the Express library, which is a lightweight framework for building web servers in Node.js
        -   Create an instance of the Express application, which represents your web server
        -   Define the port number on which the server will listen for incoming requests
        -   Start the server and make it listen on the specified port.
        -   Once the server starts, log a message indicating it is running and on which port.

    -   Run the app
        -   node server.js OR node server OR npm start
        -   to stop server, use Ctrl + C

    -   git push
        - GIT_SSH_COMMAND="ssh -i ~/.ssh/id_rsa_pbczmm" git push origin main

    -   Note:
        -   In the package.json, the entry name was changed into server.js

### Step 1.1 (Lesson Continued)
    -   Setting Up Server Auto Reload
        -   (node module build-in)
        "scripts": {
            "start": "node server",
            "dev": "node --watch server"
        }
        -   Run:    npm run dev

        -   OR (3rd party module)
        -   npm install -g nodemon
        -   Run:    nodemon server

    -   Testing routes
        -   using get & send
        -   try it in browser localhost:3000

        -   using get & sendFile from the location 'public' //(path & path.join())
        -   try it in browser localhost:3000/home   OR localhost:3000/about

## Step 2 (Setting Up Middleware)
    -   Create 'public' folder and add some files
    -   Add codes for static middleware to server.js
        -   'express.static' middleware to serve static files like HTML, CSS, JavaScript, and images
        -   can be accessed at 'http://localhost:3000 OR style.css OR script.js etc.

## Step 3 (Setting Up Json Data)
    -   First with hardcode for json 'posts'
    -   Send it to client through res.json() OR res.send()
        -   Access at 'http://localhost:3000/api/posts

    -   Install 'postman' VS Code extension and access the json
        -   Choose 'GET' method
        -   Type 'localhost:3000/api/posts'
        -   Click 'Send'

### Step 3.1 (Lesson Continued)
    -   Get All Posts       //localhost:3000/api/posts
    -   Get limit query     //localhost:3000/api/posts?limit=2
    -   Get Single Post     //localhost:3000/api/posts/:id

    -   Note:
        -   res.json();
        -   res.status(200).json(); //updated with 200
        -   res.status(404).json(); //updated with 404
        -   drop else {}, but add return to if(){... return ...}

## Step 4 (Setting Up .env 'Enviroment Variable')
    -   Create .env file and add API keys OR Port
    -   Update code for PORT in the server.js
    -   Update Script
        -   "dev": "node --watch --env-file=.env server"

## Step 5 (Setting Up Router - Separation of concern)
    -   Create routes folder and create posts.json
        -   move all json hard-codes and respective fetch codes to posts.js
        -   add and make some changes to the server
        -   remove /api/posts from posts.js being after added in the server
        -   add export the router at the end

### Step 5.1 (Lesson Continued 'ES module')
        -   add "type": "module" to package.json
        -   use import ... from ... in server.js and posts.js
        -   __dirname is not defined in ES module scope

## Step 6 (Update posts with CRUD)
    -   Add body parser middleware to the server
    -   Add new post into posts.js
    -   Try to add a new post with postman at localhost:3579/api/posts
        -   choose body and choose form-urlencoded
        -   add key (title) and value (Hello), and then click send
    -   Try to update at localhost:3579/api/posts/4
        -   change the value of the title
    -   Try to delete a post at localhost:3579/api/posts/4
        -   choose Delete and click send