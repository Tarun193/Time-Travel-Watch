const HamBurger = document.getElementById("HamBurger");
const Cross = document.getElementById("Cross-Logo");
const NavLinks = document.querySelectorAll("header nav ul a");

NavLinks.forEach((link) => {
  console.log(link);
  link.addEventListener("click", HidePhoneMenu);
});
HamBurger.addEventListener("click", () => {
  const cross = document.getElementById("Cross-Logo");
  const nav = document.getElementById("Nav-Bar");
  cross.style.display = "block";
  nav.setAttribute("class", "longNav");
});

Cross.addEventListener("click", HidePhoneMenu);

function HidePhoneMenu(obj) {
  const nav = document.getElementById("Nav-Bar");
  if (nav.getAttribute("class") === "longNav") {
    const cross = document.getElementById("Cross-Logo");
    cross.style.display = "none";
    nav.removeAttribute("class");
  }
}
