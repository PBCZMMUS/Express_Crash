const output = document.querySelector("#output");
const getAllPostsBtn = document.querySelector("#get-all-posts-btn");
const getSinglePostForm = document.querySelector("#get-single-post-form");
const addPostForm = document.querySelector("#add-post-form");
const updatePostForm = document.querySelector("#update-post-form");
const deletePostForm = document.querySelector("#delete-post-form");

// Fetch all posts
async function fetchPosts() {
  try {
    const res = await fetch("http://localhost:3579/api/posts");
    if (!res.ok) throw new Error("Failed to fetch posts!");

    const posts = await res.json();
    renderPosts(posts);
  } catch (error) {
    console.error("Error fetching posts:", error);
  }
}

// Render posts in the DOM
function renderPosts(posts) {
  output.innerHTML = ""; // Clear output
  posts.forEach((post) => {
    const postEl = document.createElement("div");
    postEl.className = "post";
    postEl.innerHTML = `
      <h3>Post ID: ${post.id}</h3>
      <p>Title: ${post.title}</p>
    `;
    output.appendChild(postEl);
  });
}

// Fetch a single post by ID
async function fetchSinglePost(e) {
  e.preventDefault();
  const formData = new FormData(this);
  const id = formData.get("post-id");

  try {
    const res = await fetch(`http://localhost:3579/api/posts/${id}`);
    if (!res.ok) throw new Error(`Post with ID ${id} not found!`);

    const post = await res.json();
    renderPosts([post]);
  } catch (error) {
    console.error("Error fetching single post:", error);
  }
}

// Add a new post
async function addPost(e) {
  e.preventDefault();
  const formData = new FormData(this);
  const title = formData.get("title");

  try {
    const res = await fetch("http://localhost:3579/api/posts");
    const posts = await res.json();

    // Calculate new ID
    const newId = posts.length > 0 ? Math.max(...posts.map((p) => p.id)) + 1 : 1;

    const addRes = await fetch("http://localhost:3579/api/posts", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id: newId, title }),
    });

    if (!addRes.ok) throw new Error("Failed to add a new post!");

    fetchPosts(); // Refresh posts after adding
    resetInputFields(addPostForm);
  } catch (error) {
    console.error("Error adding post:", error);
  }
}

// Update a post
async function updatePost(e) {
  e.preventDefault();
  const formData = new FormData(this);
  const id = formData.get("post-id");
  const newTitle = formData.get("new-title");

  try {
    const res = await fetch(`http://localhost:3579/api/posts/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ title: newTitle }),
    });

    if (!res.ok) throw new Error(`Failed to update post with ID ${id}!`);

    fetchPosts(); // Refresh posts after updating
    resetInputFields(updatePostForm);
  } catch (error) {
    console.error("Error updating post:", error);
  }
}

// Delete a post
async function deletePost(e) {
  e.preventDefault();
  const formData = new FormData(this);
  const id = formData.get("post-id");

  try {
    const res = await fetch(`http://localhost:3579/api/posts/${id}`, {
      method: "DELETE",
    });

    if (!res.ok) throw new Error(`Failed to delete post with ID ${id}!`);

    fetchPosts(); // Refresh posts after deletion
    resetInputFields(deletePostForm);
  } catch (error) {
    console.error("Error deleting post:", error);
  }
}

// Reset input fields after submission
function resetInputFields(form) {
  form.reset(); // Clear the form values
  const inputs = form.querySelectorAll("input");
  inputs.forEach((input) => {
    input.placeholder = input.dataset.placeholder; // Restore original placeholder
  });
}

// Handle input focus and blur
function handleInputFocus(e) {
  const input = e.target;
  if (!input.dataset.placeholder) {
    input.dataset.placeholder = input.placeholder; // Save the placeholder
  }
  input.placeholder = ""; // Clear the placeholder on focus
}

function handleInputBlur(e) {
  const input = e.target;
  input.placeholder = input.dataset.placeholder; // Restore the placeholder on blur
}

// Attach input focus and blur event listeners
document.querySelectorAll("input").forEach((input) => {
  input.addEventListener("focus", handleInputFocus);
  input.addEventListener("blur", handleInputBlur);
});

// Event Listeners
getAllPostsBtn.addEventListener("click", fetchPosts);
getSinglePostForm.addEventListener("submit", fetchSinglePost);
addPostForm.addEventListener("submit", addPost);
updatePostForm.addEventListener("submit", updatePost);
deletePostForm.addEventListener("submit", deletePost);

/*
const output = document.querySelector("#output");
const button = document.querySelector("#get-posts-btn");
const form = document.querySelector("#add-post-form");

// Get and show posts
async function showPosts() {
  try {
    const res = await fetch("http://localhost:3579/api/posts");
    if (!res.ok) {
      throw new Error("Failed to fetch posts!");
    }

    const posts = await res.json();
    output.innerHTML = "";

    posts.forEach((post) => {
      const postEl = document.createElement("div");
      postEl.textContent = post.title;
      output.appendChild(postEl);
    });
  } catch (error) {
    console.log("Error fetching posts: ", error);
  }
}

//Submit new post
async function addPost(e) {
  const formData = new FormData(this);
  const title = formData.get("title");

  try {
    const res = await fetch("http://localhost:3579/api/posts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ title }),
    });

    if (!res.ok) {
      throw new Error("Failed to add a new post!");
    }

    const newPost = await res.json();
    const postEl = document.createElement("div");
    postEl.textContent = newPost.title;
    output.appendChild(postEl);
    showPosts();
  } catch (error) {
    console.error("Error adding post!");
  }
}
// Event Listerners
button.addEventListener("click", showPosts);
form.addEventListener("submit", addPost);
*/