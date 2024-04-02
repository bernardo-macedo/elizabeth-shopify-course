// Put your application javascript here

//Mobile menu items
const mobileLinks = document.querySelector("#mobile-links");
//Mobile Burger Icon and Close
const mobileOpenMenuIcon = document.querySelector("#menu-open-icon");
const mobileCloseMenuIcon = document.querySelector("#menu-close-icon");

// Function to hide and show mobile menu
function mobileMenuHandler() {
  if (mobileLinks.classList.contains("translate-x-full")) {
    mobileLinks.classList.replace("translate-x-full", "translate-x-0");
    mobileCloseMenuIcon.classList.toggle("hidden");
    mobileOpenMenuIcon.classList.toggle("hidden");
  } else {
    mobileLinks.classList.replace("translate-x-0", "translate-x-full");
    mobileCloseMenuIcon.classList.toggle("hidden");
    mobileOpenMenuIcon.classList.toggle("hidden");
  }
}

//Event listeners to handle mobile menu
mobileOpenMenuIcon.addEventListener("click", mobileMenuHandler);
mobileCloseMenuIcon.addEventListener("click", mobileMenuHandler);

//Hide and show dropdown items in menu
function menuDropdownHandler(elementId) {
  let dropdownSublinks = document.querySelector(
    `#${elementId} .sublinks-dropdown`
  );
  if (dropdownSublinks.classList.contains("hidden")) {
    const allDropdowns = document.querySelectorAll(
      ".menu-dropdown-item .sublinks-dropdown"
    );
    allDropdowns.forEach((element) => {
      if (element.classList.contains("flex")) {
        element.classList.replace("flex", "hidden");
      }
    });
    dropdownSublinks.classList.replace("hidden", "flex");
  } else {
    dropdownSublinks.classList.replace("flex", "hidden");
  }
}
