// This file goes against what I wanted to do with this site, which is make everything myself. But I needed to be able to have users
// navigate so I had it generated via ChatGPT through multiple iterations trying to get the links to dynamically pull from GitHub. 
// This kept causing issues because the data wasn't pulling correctly. After missing my bedtime by hours I finally asked it at 3:30am
// to let me make the values myself in a separate JSON file and gave it the structure I wanted for it. Outside of needing to waste
// 2 hours of vacation time by coming in to my job late it worked like a charm. 7/16/23-7/17/23

// jk. It didn't work on anything in the projects/ directory at all. Every time I tried to iterate on this with GPT it made it worse.
// Destroy, Rebuild.

document.addEventListener("DOMContentLoaded", function () {
  // Fetch the JSON data
  var jsonDataPath = "/navbar.json";
  fetch(jsonDataPath)
    .then((response) => response.json())
    .then((data) => {
      var navbarLinks = "";

      // Generate the navbar links
      data.forEach(function (item) {
        var isActive = window.location.pathname.includes(item.link);

        var linkClass = isActive ? "nav-link active" : "nav-link";
        navbarLinks += `<li class="nav-item"><a class="${linkClass}" href="${item.link}">${item.name}</a></li>`;
      });

      // Update the navbar placeholder with the generated links
      var navbarPlaceholder = document.getElementById("navbar-placeholder");
      navbarPlaceholder.innerHTML = `
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
          <div class="container">
            <a class="navbar-brand" href="index.html">Longeill</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
              <ul class="navbar-nav">
                ${navbarLinks}
              </ul>
            </div>
          </div>
        </nav>
      `;
    })
    .catch((error) => {
      console.error("Error fetching JSON data:", error);
    });
});
