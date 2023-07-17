function generateNavbar() {
  var navbar = document.createElement("nav");
  navbar.id = "main-nav";
  navbar.className = "navbar navbar-expand-sm navbar-dark";

  navbar.innerHTML = `
    <a class="navbar-brand pl-3" href="#">&nbsp;Longeill</a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div class="navbar-nav">
        <a class="nav-item nav-link" href="index.html">Home</a>
        <a class="nav-item nav-link" href="workflow.html">Workflow</a>
        <a class="nav-item nav-link" href="resume.html">Resume</a>
        <div class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" id="projectsDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Projects</a>
          <div class="dropdown-menu" aria-labelledby="projectsDropdown">
          </div>
        </div>
      </div>
    </div>
  `;

  var dropdownMenu = navbar.querySelector(".dropdown-menu");

  fetch("https://api.github.com/repos/longeill/longeill.github.io/contents/Projects")
    .then(function(response) {
      return response.json();
    })
    .then(function(data) {
      data.forEach(function(item) {
        if (item.type === "dir") {
          var directory = item.name.replace(/\+/g, " ");
          var link = `https://longeill.github.io/Projects/${directory}/${directory}.html`;
          var linkElement = document.createElement("a");
          linkElement.className = "dropdown-item";
          linkElement.href = link;
          linkElement.textContent = directory;
          dropdownMenu.appendChild(linkElement);
        }
      });
    })
    .catch(function(error) {
      console.log("Error fetching projects:", error);
    });

  return navbar;
}
