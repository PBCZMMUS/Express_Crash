let posts = [];

export const getPosts = (req, res) => {
  res.status(200).json(posts);
};

export const getPostById = (req, res) => {
  const id = parseInt(req.params.id);
  const post = posts.find((p) => p.id === id);
  if (!post) return res.status(404).send('Post not found!');
  res.status(200).json(post);
};

export const addPost = (req, res) => {
  const { title } = req.body;
  if (!title) return res.status(400).send('Title is required!');
  const newPost = { id: posts.length + 1, title };
  posts.push(newPost);
  res.status(201).json(newPost);
};

export const updatePost = (req, res) => {
  const id = parseInt(req.params.id);
  const post = posts.find((p) => p.id === id);
  if (!post) return res.status(404).send('Post not found!');
  post.title = req.body.title || post.title;
  res.status(200).json(post);
};

export const deletePost = (req, res) => {
  const id = parseInt(req.params.id);
  posts = posts.filter((p) => p.id !== id);
  res.status(200).json({ message: 'Post deleted successfully!' });
};