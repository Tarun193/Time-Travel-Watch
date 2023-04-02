// Getting all the required Elements
const HamBurger = document.getElementById("HamBurger");
const Cross = document.getElementById("Cross-Logo");
const NavLinks = document.querySelectorAll("header nav ul a");
const nav = document.getElementById("Nav-Bar");

if (nav.getAttribute("class") === "longNav") {
  // Add an event listener to the scroll event
}
NavLinks.forEach((link) => {
  link.addEventListener("click", HidePhoneMenu);
});

HamBurger.addEventListener("click", () => {
  const cross = document.getElementById("Cross-Logo");
  cross.style.display = "block";
  document.body.style.overflow = "hidden";
  nav.setAttribute("class", "longNav");
});

Cross.addEventListener("click", HidePhoneMenu);

function HidePhoneMenu(obj) {
  if (nav.getAttribute("class") === "longNav") {
    const cross = document.getElementById("Cross-Logo");
    cross.style.display = "none";
    document.body.style.overflow = "visible";
    nav.removeAttribute("class");
  }
}
