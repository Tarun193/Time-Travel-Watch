const HamBurger = document.getElementById("HamBurger");
HamBurger.addEventListener("click", () => {
  const nav = document.getElementById("Nav-Bar");
  console.log(nav);
  nav.setAttribute("class", "longNav");
});
