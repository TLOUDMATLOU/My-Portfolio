// Replace with your actual GitHub username
const GITHUB_USERNAME = "TlouDMatlou";

async function fetchGitHubProjects() {
  const grid = document.getElementById("projects-grid");

  try {
    const response = await fetch(
      `https://api.github.com/users/${GITHUB_USERNAME}/repos?sort=updated&per_page=6`
    );

    if (!response.ok) throw new Error("Could not fetch repos");

    const repos = await response.json();

    // Filter out forked repos, show only your own work
    const ownRepos = repos.filter(repo => !repo.fork);

    if (ownRepos.length === 0) {
      grid.innerHTML = `<p class="loading-text">No repos found yet — push your first project!</p>`;
      return;
    }

    grid.innerHTML = ownRepos.map(repo => `
      <div class="project-card">
        <h3>${repo.name.replace(/-/g, " ")}</h3>
        <p>${repo.description || "No description yet."}</p>
        <div class="project-footer">
          <span class="project-lang">${repo.language || "—"}</span>
          <a href="${repo.html_url}" target="_blank" class="project-link">View on GitHub →</a>
        </div>
      </div>
    `).join("");

  } catch (error) {
    grid.innerHTML = `<p class="loading-text">Could not load projects. Check your username in script.js</p>`;
    console.error(error);
  }
}

fetchGitHubProjects();