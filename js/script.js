// toggle class active
const navbarNav = document.querySelector(".navbar-nav");

// tampilan menu diklik
document.querySelector("#menu-tampilan").onclick = () => {
  navbarNav.classList.toggle("active");
};

// klik diluar sidebar untuk menghilangkan nav
const tampilan = document.querySelector("#menu-tampilan");

document.addEventListener("click", function (e) {
  if (!tampilan.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }
});
