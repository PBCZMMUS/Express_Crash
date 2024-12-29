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

    if (!response.ok) {
      throw new Error("Failed to add post");
    }

    alert("Post added!");
    fetchPosts(); // Refresh the post list
    postForm.reset();
  } catch (err) {
    alert(err.message);
  }
});

// Fetch all posts from the server and display them
const fetchPosts = async () => {
  try {
    const response = await fetch("/api/posts");
    if (!response.ok) {
      throw new Error("Failed to fetch posts");
    }

    const posts = await response.json();
    postList.innerHTML = ""; // Clear the post list

    posts.forEach((post) => {
      addPost(post.id, post.title);
    });
  } catch (err) {
    alert(err.message);
  }
};

// Dynamically add a post to the list
function addPost(id, title) {
  const li = document.createElement("li");
  li.innerHTML = `
    <span class="post-title">${title}</span>
    <div class="button-group" style="display: none;">
      <button class="btn update-btn" onclick="editPost(${id})">Update</button>
      <button class="btn delete-btn" onclick="deletePost(${id})">Delete</button>
    </div>
  `;
  postList.appendChild(li);
}

// Delete a post
const deletePost = async (id) => {
  try {
    const response = await fetch(`/api/posts/${id}`, { method: "DELETE" });
    if (!response.ok) {
      throw new Error("Failed to delete post");
    }
    fetchPosts(); // Refresh the post list
  } catch (err) {
    alert(err.message);
  }
};

// Edit a post
const editPost = async (id) => {
  const title = prompt("Enter new title:");
  if (!title) return;

  try {
    const response = await fetch(`/api/posts/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ title }),
    });

    if (!response.ok) {
      throw new Error("Failed to update post");
    }

    fetchPosts(); // Refresh the post list
  } catch (err) {
    alert(err.message);
  }
};

// Show buttons only when a post title is clicked
postList.addEventListener("click", (e) => {
  if (e.target.classList.contains("post-title")) {
    document.querySelectorAll(".button-group").forEach((group) => {
      group.style.display = "none"; // Hide all other button groups
    });

    const buttonGroup = e.target.nextElementSibling;
    if (buttonGroup) {
      buttonGroup.style.display = "flex"; // Show buttons for the clicked title
    }
  }
});

// Hide buttons when clicking outside a title
document.addEventListener("click", (e) => {
  if (!e.target.classList.contains("post-title")) {
    document.querySelectorAll(".button-group").forEach((group) => {
      group.style.display = "none"; // Hide all button groups
    });
  }
});

// Sort posts alphabetically
sortButton.addEventListener("click", () => {
  const posts = Array.from(postList.children);
  posts.sort((a, b) =>
    a.querySelector(".post-title").textContent.localeCompare(
      b.querySelector(".post-title").textContent
    )
  );

  postList.innerHTML = ""; // Clear the current list
  posts.forEach((post) => postList.appendChild(post)); // Append sorted posts
});

// Initial fetch of posts when the page loads
fetchPosts();