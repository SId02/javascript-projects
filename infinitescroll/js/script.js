
const apiEndpoint = 'https://jsonplaceholder.typicode.com/posts';
let page = 1;
const limit = 10;
let loading = false;
let hasMore = true;
let gridMode = false;

const postsContainer = document.getElementById('posts-container');
const loader = document.getElementById('loader');
const toggleViewBtn = document.getElementById('toggle-view');

toggleViewBtn.addEventListener('click', () => {
  gridMode = !gridMode;
  postsContainer.className = gridMode ? 'columns is-multiline post-grid' : 'columns is-multiline post-list';
  toggleViewBtn.textContent = gridMode ? 'Switch to List View' : 'Switch to Grid View';
});


async function loadPosts() {
  if (loading || !hasMore) return;
  loading = true;
  loader.style.display = 'block';
  const res = await fetch(`${apiEndpoint}?_page=${page}&_limit=${limit}`);
  const data = await res.json();
  if (data.length < limit) hasMore = false;
  data.forEach(renderPost);
  page++;
  loading = false;
  loader.style.display = 'none';
}

function renderPost(post) {
  const col = document.createElement('div');
  col.className = gridMode ? 'column is-one-third' : 'column is-full';
  col.innerHTML = `
    <div class="card">
      <div class="card-content">
        <h3 class="title is-5">${post.title}</h3>
        <p class="content">${post.body}</p>
      </div>
    </div>
  `;
  postsContainer.appendChild(col);
}

window.addEventListener('scroll', () => {
  if (
    window.innerHeight + window.scrollY >= document.body.offsetHeight - 100
    && !loading && hasMore
  ) {
    loadPosts();
  }
});

loadPosts();