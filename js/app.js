// MENU NAVIGATION
const li = document.querySelectorAll(".main-menu a");
const header = document.querySelector("#header");
const ulMenu = document.querySelector(".ul-menu");
const sections = document.querySelectorAll(".section");
const menu = document.querySelector(".nav");
const menuBtn = document.querySelector(".mobile-nav-toggle");
const menuIcon = document.querySelector(".mobile-nav-toggle i");

function removeClass() {
  li.forEach((item) => item.parentNode.classList.remove("active"));
}

function removeSection() {
  sections.forEach((section) => section.classList.remove("section-show"));
}

function showSection(id) {
  removeSection();
  const currentSection = document.getElementById(id);
  if (currentSection) currentSection.classList.add("section-show");
}

// Main menu click
ulMenu.addEventListener("click", (e) => {
  const id = e.target.dataset.id;

  if (id) {
    removeClass();
    e.target.parentElement.classList.add("active");

    if (id !== "home") {
      header.classList.add("header-top");
      showSection(id);
    } else {
      header.classList.remove("header-top");
      removeSection();
    }

    // Close mobile nav if open
    if (menu.classList.contains("mobile-nav")) {
      menu.classList.remove("mobile-nav");
      menu.classList.add("d-none");
      menuIcon.classList.remove("bx-x");
      menuIcon.classList.add("bx-menu");
      document.body.classList.remove("mobile-nav-active");
    }
  }
});

// MOBILE MENU TOGGLE
menuBtn.addEventListener("click", () => {
  menuIcon.classList.toggle("bx-x");
  menuIcon.classList.toggle("bx-menu");
  menu.classList.toggle("d-none");
  menu.classList.toggle("mobile-nav");
  document.body.classList.toggle("mobile-nav-active");
});

// MEDIA QUERY ADJUSTMENT
function handleViewportChange(x) {
  if (x.matches) {
    menu.classList.remove("mobile-nav");
  }
}

const x = window.matchMedia("(min-width: 768px)");
handleViewportChange(x);
x.addListener(handleViewportChange);

// COUNTER ANIMATION
const counters = document.querySelectorAll(".count-number");

counters.forEach((counter) => {
  const target = +counter.getAttribute("data-to");
  let count = 0;
  const increment = Math.ceil(target / 200);

  function updateCounter() {
    count += increment;
    if (count < target) {
      counter.innerText = count;
      setTimeout(updateCounter, 10);
    } else {
      counter.innerText = target;
    }
  }

  updateCounter();
});
const filterButtons = document.querySelectorAll("#portfolio-flters li");
const items = document.querySelectorAll(".portfolio-item");
filterButtons.forEach((btn) =>
  btn.addEventListener("click", () => {
    const filter = btn.dataset.id;
    // Update active class
    document.querySelector(".filter-active")?.classList.remove("filter-active");
    btn.classList.add("filter-active");
    items.forEach((item) => {
      const match = filter === "all" || item.id === filter;
      item.classList.toggle("show", match); // show match
      item.classList.toggle("hide", !match); // hide not match
    });
  })
);

// // PORTFOLIO FILTER

// const filterBtn = document.querySelectorAll("#portfolio-flters li");
// const items = document.querySelectorAll(".portfolio-item");
// const portfolio = document.getElementById("portfolio");

// filterBtn.forEach((item) => {
//   item.addEventListener("click", (e) => {
//     const filter = e.target.dataset.id;
//     if (filter === "all") {
//       romoveActive();
//       e.target.classList.add("filter-active");

//       items.forEach((item) => {
//         item.classList.remove("hide");
//         item.classList.add("show");
//       });
//     }
//     if (filter && filter !== "all") {
//       romoveActive();
//       e.target.classList.add("filter-active");
//       items.forEach((item) => item.classList.add("hide"));
//       const showFIlter = document.querySelectorAll(`#${filter}`);
//       showFIlter.forEach((item) => {
//         item.classList.remove("hide");
//         item.classList.add("show");
//       });
//     }
//   });
// });

// function romoveActive() {
//   filterBtn.forEach((item) => {
//     item.classList.remove("filter-active");
//   });
// }
