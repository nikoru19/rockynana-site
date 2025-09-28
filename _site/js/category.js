// Placeholder function to simulate fetching posts from blog posts folder
// In real setup, you could generate a JSON during build or fetch Markdown frontmatter dynamically

let posts = [
  {
    title: "Rockynana’s Favorite Finds",
    image: "..//blog/uploads/cat-yarn-ball.png",
    category: "Things That Made Me Smile",
    author: { name: "Nicole", avatar: "" },
    modified_date: "2025-09-18",
    excerpt: "A little reflection on small joys…",
    featured: true
  },
  {
    title: "Messy Life Ramble",
    image: "../blog/uploads/cat-yarn-ball.png",
    category: "Rockynana’s Ramble",
    author: { name: "Nicole", avatar: "../blog/uploads/cat-sleeping.png" },
    modified_date: "2025-09-15",
    excerpt: "Thoughts on dealing with chaos in daily life.",
    featured: false
  },
  // Add more placeholder posts here
];

const categorySelect = document.getElementById("category-select");
const featuredPostContainer = document.getElementById("featured-post");
const postsGrid = document.getElementById("posts-grid");
const loadMoreBtn = document.getElementById("load-more-btn");
const emptyState = document.getElementById("empty-state");

let postsPerPage = 4;
let currentPage = 1;
let filteredPosts = posts;

// Populate categories dynamically
function populateCategories() {
  const categories = [...new Set(posts.map(post => post.category))];
  categories.forEach(cat => {
    const option = document.createElement("option");
    option.value = cat;
    option.textContent = cat;
    categorySelect.appendChild(option);
  });
}

// Render featured post
function renderFeatured() {
  const featured = filteredPosts.find(p => p.featured);
  featuredPostContainer.innerHTML = "";
  if (featured) {
    const div = document.createElement("div");
    div.innerHTML = `
        <img src="${featured.image}" alt="${featured.title}" style="width:100%; border-radius:12px; max-height:300px; object-fit:cover;">
        <div>
          <h2 class = "text-dark">${featured.title}</h2>
          <p class = "text-dark">${featured.excerpt}</p>
          <p class="meta text-dark">
          <img src="${featured.author.avatar}" alt="${featured.author.name}" class="author-avatar">
          ${featured.author.name} | ${featured.modified_date} | ${featured.category}
          </p>
        </div>
      `;
    featuredPostContainer.appendChild(div);
  }
}

// Render post cards
function renderPosts() {
  postsGrid.innerHTML = "";
  const start = 0;
  const end = currentPage * postsPerPage;
  const pagePosts = filteredPosts.slice(start, end);

  if (pagePosts.length === 0) {
    emptyState.style.display = "block";
    loadMoreBtn.style.display = "none";
    return;
  } else {
    emptyState.style.display = "none";
  }

  pagePosts.forEach(post => {
    const card = document.createElement("div");
    card.className = "post-card";
    card.innerHTML = `
      <img src="${post.image}" alt="${post.title}">
      <div class="post-card-content">
        <h2>${post.title}</h2>
        <p class="meta">By ${post.author.name} | ${post.modified_date} | ${post.category}</p>
        <p class="text-dark">${post.excerpt}</p>
      </div>
    `;
    postsGrid.appendChild(card);
  });

  if (end >= filteredPosts.length) {
    loadMoreBtn.style.display = "none";
  } else {
    loadMoreBtn.style.display = "inline-block";
  }
}

// Load more posts
loadMoreBtn.addEventListener("click", () => {
  currentPage++;
  renderPosts();
});

// Category filter change
categorySelect.addEventListener("change", () => {
  const selected = categorySelect.value;
  filteredPosts = selected === "all" ? posts : posts.filter(p => p.category === selected);
  currentPage = 1;
  renderFeatured();
  renderPosts();
});

// Initial render
populateCategories();
renderFeatured();
renderPosts();
