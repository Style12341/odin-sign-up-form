document.addEventListener("DOMContentLoaded", function () {
  // Get the form
  var form = document.getElementById("contact-form");
  // Get the submit button
  var submit = document.getElementById("submit");
  // Get the status element
  var passwordStatus = document.getElementById("password_status");

  var input = document.querySelectorAll("input");

  input.forEach((inp) => {
    inp.addEventListener("input", function () {
      if (inp.validity.valid) {
        inp.classList.remove("invalid");
      } else {
        inp.classList.add("invalid");
      }
    });
  });
  form.addEventListener("submit", function (event) {
    // Check if password and confirm password inputs match
    var password = document.getElementById("password");
    var confirmPassword = document.getElementById("confirm-password");
    if (password.value !== confirmPassword.value) {
      // If they don't match, prevent form from being submitted and display error message
      event.preventDefault();
      passwordStatus.textContent = "Passwords do not match";
      passwordStatus.classList.add("error");
    }
  });
});
