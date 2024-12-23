const express = require('express');
const path = require('path');

const app = express();

const PORT = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, 'public')));

let posts = [
    { id: 1, title: "Post One" },
    { id: 2, title: "Post Two" },
    { id: 3, title: "Post Three" }
];

// Getting All Posts
app.get('/api/posts', (req, res) => {
    // res.json(posts);
    res.status(200).json(posts);
});

// Getting Query
app.get('/api/posts', (req, res) => {
    console.log(req.query);
    const limit = parseInt(req.query.limit);

    if(!isNaN(limit) && limit > 0){
        return res.status(200).json(posts.slice(0, limit))
    }
        res.status(200).json(posts);

    /*
    if(!isNaN(limit) && limit > 0){
        // res.json(posts.slice(0, limit))
        res.status(200).json(posts.slice(0, limit))
    } else {
        // res.json(posts);
        res.status(200).json(posts);
    }
    */
});

/*
// Getting Single Post
app.get('/api/posts/:id', (req, res) => {
    console.log(req.params)
    const id = parseInt(req.params.id);
    // res.json(posts.filter((post) => post.id === id));
    res.status(200).json(posts.filter((post) => post.id === id));
});
*/

// Getting Updated Single Post
app.get('/api/posts/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const post = posts.find((post) => post.id === id)
    
    if(!post){
        return res.status(404).json({msg: `A post with the id of ${id} was NOT found!`});
    }
        res.status(200).json(post);
    
    /*
    if(!post){
        res.status(404).json({msg: `A post with the id of ${id} was NOT found!`});
    } else {
        res.status(200).json(post);
    }
    */
});

app.listen(PORT, () => console.log(`Server is running on PORT ${PORT} . . .`));