const form = document.getElementById("form");
const name = document.getElementById("name");
const nameError = document.getElementById("errorName");
const email = document.getElementById("email");
const emailError = document.getElementById("errorEmail");
const password = document.getElementById("password");
const passwordError = document.getElementById("errorPassword");
const confirmPassword = document.getElementById("confirmPassword");
const confirmPasswordError = document.getElementById("errorConfirmPassword");
const nameOk = /^[A-Za-z\s]+$/;
const emailOk = /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;
const passwordOk = /^[\s\S]{1,8}$/;

function markAsCorrect(field) {
  field.classList.remove("incorrect");
  field.classList.remove("errorIcon");
  field.classList.add("correct");
  field.classList.add("successIcon");
}

function markAsIncorrect(field) {
  field.classList.remove("correct");
  field.classList.remove("successIcon");
  field.classList.add("incorrect");
  field.classList.add("errorIcon");
}

function validateName() {
  if (name.value.length < 1 || name.value.trim() == "") {
    nameError.innerHTML = "Rellene este campo";
    markAsIncorrect(name);
  } else if (nameOk.test(name.value)) {
    nameError.innerHTML = "";
    markAsCorrect(name);
    return true;
  } else {
    nameError.innerHTML =
      "Nombre no válido. Solo letras permitidas, no números.";
    markAsIncorrect(name);
  }
  return false;
}

function validateEmail() {
  if (email.value.length < 1 || email.value.trim() == "") {
    emailError.innerHTML = "Rellene este campo";
    markAsIncorrect(email);
  } else if (emailOk.test(email.value)) {
    emailError.innerHTML = "";
    markAsCorrect(email);
    return true;
  } else {
    emailError.innerHTML = "Email inválido";
    markAsIncorrect(email);
  }
  return false;
}

function validatePassword() {
  if (password.value.length < 1 || password.value.trim() == "") {
    passwordError.innerHTML = "Rellene este campo";
    markAsIncorrect(password);
  } else if (passwordOk.test(password.value)) {
    passwordError.innerHTML = "";
    markAsCorrect(password);
    return true;
  } else {
    passwordError.innerHTML = "No debe de tener más de 8 caracteres";
    markAsIncorrect(password);
  }
  return false;
}

function validateConfirmarPass() {
  if (confirmPassword.value.length < 1 || confirmPassword.value.trim() == "") {
    confirmPasswordError.innerHTML = "Rellene este campo";
    markAsIncorrect(confirmPassword);
  } else if (password.value == confirmPassword.value) {
    confirmPasswordError.innerHTML = "";
    markAsCorrect(confirmPassword);
    return true;
  } else {
    confirmPasswordError.innerHTML = "Las contraseñas no coinciden";
    markAsIncorrect(confirmPassword);
  }
  return false;
}

function validateForm(e) {
  const validName = validateName();
  const validEmail = validateEmail();
  const validPassword = validatePassword();
  const validConfirmarPass = validateConfirmarPass();
  e.preventDefault();
  if (validName && validEmail && validPassword && validConfirmarPass) {
    alert("La incripción ha sido correcta");
  }
}

form.addEventListener("submit", validateForm);
