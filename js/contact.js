// Select the form element
const form = document.getElementById("contact-form");

// checking all required fields
function checkform(form) {
  // get all the inputs within the submitted form
  var inputs = form.getElementsByTagName("input");
  for (var i = 0; i < inputs.length; i++) {
    // only validate the inputs that have the required attribute
    if (inputs[i].hasAttribute("required")) {
      if (inputs[i].value === "") {
        // found an empty field that is required
        alert("Please fill all required fields");
        return false;
      }
    }
  }
  return true;
}

// Add an event listener to the form when it is submitted
form.addEventListener("submit", (event) => {
  // Prevent the form from submitting
  event.preventDefault();
  checkform(form);
  alert("Thanks for Your Message");
  form.submit();
});

// Animation for FQ
const answers = document.getElementsByClassName("animated-answer");
for (let i = 0; i < answers.length; i++) {
  const answer = answers[i];
  console.log(answer);

  answer.addEventListener("click", (e) => {
    answer.removeAttribute("class");
    console.log("Done");
    setTimeout(() => {
      answer.setAttribute("class", "animated-answer");
    }, 10);
  });
}
