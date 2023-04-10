// Select the form element
const form = document.getElementById("contact-form");

// Add an event listener to the form when it is submitted
form.addEventListener("submit", (event) => {
  // Prevent the form from submitting
  event.preventDefault();

  // Get the form field values
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();

  // Validate the form field values
  if (name === "") {
    // Display an error message for the name field
    document.getElementById("name-error").textContent =
      "Please enter your name";
  } else {
    // Clear any existing error message for the name field
    document.getElementById("name-error").textContent = "";
  }

  if (email === "") {
    // Display an error message for the email field
    document.getElementById("email-error").textContent =
      "Please enter your email";
  } else if (!validateEmail(email)) {
    // Display an error message for an invalid email format
    document.getElementById("email-error").textContent =
      "Please enter a valid email";
  } else {
    // Clear any existing error message for the email field
    document.getElementById("email-error").textContent = "";
  }

  if (message === "") {
    // Display an error message for the message field
    document.getElementById("message-error").textContent =
      "Please enter a message";
  } else {
    // Clear any existing error message for the message field
    document.getElementById("message-error").textContent = "";
  }

  // If there are no error messages, submit the form
  if (name !== "" && email !== "" && validateEmail(email) && message !== "") {
    form.submit();
  }
});

// Function to validate email format
function validateEmail(email) {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
}

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
