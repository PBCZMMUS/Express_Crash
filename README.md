# Express Course

# Step 1 (Setting Up Server)
============================
    |-  Installation:
        -   git init
        -   npm init -y
        -   npm i express --save-dev
    |-  Create .gitignore
        -   node_modules
        -   .env
    |-  Create server.js
        -   const express = require('express');
        -   const app = express();
        -   const PORT = 3000;
        -   app.listen(PORT, ()=> console.log(`Server is running on port ${PORT}...`))
    |-  Run the app
        -   node server.js OR node server OR npm start
    |-  git push