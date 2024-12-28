const postForm = document.getElementById("post-form");
const postList = document.getElementById("post-list");
const sortButton = document.getElementById("sort-button");

// Handle the form submission to add a post
postForm.addEventListener("submit", async (e) => {
  e.preventDefault();
  const title = document.getElementById("title").value;

  try {
    const response = await fetch("/api/posts", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ title }),
    });

    const data = await response.json();
    alert("Post added!");
    fetchPosts(); // Refresh the post list
    postForm.reset();
  } catch (err) {
    alert("Failed to add post");
  }
});

// Fetch all posts from the server and display them
const fetchPosts = async () => {
  const response = await fetch("/api/posts");
  const posts = await response.json();
  postList.innerHTML = posts
    .map(
      (post) => `
      <li>
        ${post.title} 
        <button class="btn update-btn" onclick="editPost(${post.id})">Update</button>
        <button class="btn delete-btn" onclick="deletePost(${post.id})">Delete</button>
      </li>
    `
    )
    .join("");
};

// Delete a post
const deletePost = async (id) => {
  try {
    await fetch(`/api/posts/${id}`, { method: "DELETE" });
    fetchPosts(); // Refresh the post list
  } catch (err) {
    alert("Failed to delete post");
  }
};

// Edit a post
const editPost = async (id) => {
  const title = prompt("Enter new title:");
  if (!title) return;
  try {
    await fetch(`/api/posts/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ title }),
    });
    fetchPosts(); // Refresh the post list
  } catch (err) {
    alert("Failed to update post");
  }
};

// Handle Sort button
sortButton.addEventListener("click", () => {
  const posts = Array.from(postList.children);
  posts.sort((a, b) => a.textContent.localeCompare(b.textContent));
  postList.innerHTML = ""; // Clear the current list
  posts.forEach((post) => postList.appendChild(post)); // Re-add sorted posts
});

// Initial fetch of posts when the page loads
fetchPosts();