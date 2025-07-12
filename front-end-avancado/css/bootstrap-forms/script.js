const form = document.getElementById("form-default");

form.addEventListener("submit", function (event) {
  event.preventDefault();
  form.classList.add("was-validated");

  if (!form.checkValidity()) {
    alert("Campos inválidos, por favor verifique!");
  } else {
    const inputEmail = document.getElementById("email");
    const inputPassword = document.getElementById("password");

    const user = {
      email: inputEmail.value,
      password: inputPassword.value,
    };
    console.log(user);
  }
});
