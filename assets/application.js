// Put your application javascript here

// Hide and show mobile menu
function mobileMenuHandler() {
  const mobileLinks = document.querySelector("#mobile-links");
  const mobileOpenMenuIcon = document.querySelector("#menu-open-icon");
  const mobileCloseMenuIcon = document.querySelector("#menu-close-icon");

  if (mobileLinks.classList.contains("hidden")) {
    mobileLinks.classList.replace("hidden", "flex");
    mobileCloseMenuIcon.classList.toggle("hidden");
    mobileOpenMenuIcon.classList.toggle("hidden");
  } else {
    mobileLinks.classList.replace("flex", "hidden");
    mobileCloseMenuIcon.classList.toggle("hidden");
    mobileOpenMenuIcon.classList.toggle("hidden");
  }
}

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
