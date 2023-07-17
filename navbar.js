// This file goes against what I wanted to do with this site, which is make everything myself. But I needed to be able to have users
// navigate so I had it generated via ChatGPT through multiple iterations trying to get the links to dynamically pull from GitHub. 
// This kept causing issues because the data wasn't pulling correctly. After missing my bedtime by hours I finally asked it at 3:30am
// to let me make the values myself in a separate JSON file and gave it the structure I wanted for it. Outside of needing to waste
// 2 hours of vacation time by coming in to my job late it worked like a charm. 7/16/23-7/17/23

document.addEventListener("DOMContentLoaded", function () {
  // Create the navbar HTML
  var navbarHtml = `
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="container">
        <a class="navbar-brand" href="../index.html">Longeill</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <!-- Dynamically generated navbar links will be added here -->
          </ul>
        </div>
      </div>
    </nav>
  `;

  // Get the placeholder element
  var placeholder = document.getElementById("navbar-placeholder");

  // Set the navbar HTML as the content of the placeholder
  placeholder.innerHTML = navbarHtml;

  // Fetch the JSON data
  var jsonDataPath = "../navbar.json";
  fetch(jsonDataPath)
    .then((response) => response.json())
    .then((data) => {
      // Sort the data based on the "navbarPosition" property
      data.sort((a, b) => a.navbarPosition - b.navbarPosition);

      // Get the navbar links container
      var navbarLinksContainer = document.querySelector(".navbar-nav");

      // Generate the navbar links
      data.forEach(function (item) {
        var listItem = document.createElement("li");
        listItem.className = "nav-item";

        if (item.properties === "link") {
          var link = document.createElement("a");
          link.className = "nav-link";
          link.textContent = item.name;
          link.href = item.link;
          listItem.appendChild(link);
        } else if (item.properties === "dropdown") {
          var dropdownItem = document.createElement("li");
          dropdownItem.className = "nav-item dropdown";

          var dropdownLink = document.createElement("a");
          dropdownLink.className = "nav-link dropdown-toggle";
          dropdownLink.textContent = item.name;
          dropdownLink.href = item.link;
          dropdownLink.setAttribute("role", "button");
          dropdownLink.setAttribute("data-bs-toggle", "dropdown");

          var dropdownMenu = document.createElement("ul");
          dropdownMenu.className = "dropdown-menu";

          item.subitems.sort((a, b) => a.navbarPosition - b.navbarPosition);
          item.subitems.forEach(function (subitem) {
            var dropdownMenuItem = document.createElement("li");
            var dropdownSublink = document.createElement("a");
            dropdownSublink.className = "dropdown-item";
            dropdownSublink.textContent = subitem.name;
            dropdownSublink.href = subitem.link;
            dropdownMenuItem.appendChild(dropdownSublink);
            dropdownMenu.appendChild(dropdownMenuItem);
          });

          dropdownItem.appendChild(dropdownLink);
          dropdownItem.appendChild(dropdownMenu);

          listItem.appendChild(dropdownItem);
        }

        navbarLinksContainer.appendChild(listItem);
      });
    })
    .catch((error) => {
      console.error("Error fetching JSON data:", error);
    });
});
      });
    });
});
