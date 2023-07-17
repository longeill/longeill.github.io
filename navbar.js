document.addEventListener("DOMContentLoaded", function () {
  // Create the navbar HTML
  var navbarHtml = `
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="container">
        <a class="navbar-brand" href="index.html">Longeill</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item">
              <a class="nav-link" href="index.html">Home</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="workflow.html">Workflow</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="resume.html">Resumé</a>
            </li>
            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" href="projects.html" id="projectsDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Projects
              </a>
              <ul class="dropdown-menu" aria-labelledby="projectsDropdown">
                <!-- Dynamically generated project links will be added here -->
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  `;

  // Get the placeholder element
  var placeholder = document.getElementById("navbar-placeholder");

  // Set the navbar HTML as the content of the placeholder
  placeholder.innerHTML = navbarHtml;

  // Dynamically generate project links for the dropdown
  var projectsMenu = document.querySelector("#projectsDropdown + .dropdown-menu");
  var projectsJsonPath = "projects.json";

  fetch(projectsJsonPath)
    .then((response) => response.json())
    .then((data) => {
      data.forEach(function (project) {
        var menuItem = document.createElement("li");
        var linkItem = document.createElement("a");
        linkItem.className = "dropdown-item";
        linkItem.textContent = project.name;
        linkItem.href = project.link;

        menuItem.appendChild(linkItem);
        projectsMenu.appendChild(menuItem);
      });
    });
});
