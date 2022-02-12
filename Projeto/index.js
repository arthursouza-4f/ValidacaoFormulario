//Pegas os valores dos inputs
const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const password2 = document.getElementById("password2");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  validaInputs();
});

const validaInputs = () => {
  const usernameValue = username.value.trim();
  const emailValue = email.value.trim();
  const passwordValue = password.value.trim();
  const password2Value = password2.value.trim();

  if (usernameValue === "") {
    setaErro(username, "Nome é necessário");
  } else {
    setaSucesso(username);
  }

  if (emailValue === "") {
    setaErro(email, "Email é necessário");
  } else if (!validaEmail(emailValue)) {
    setaErro(email, "Email inválido");
  } else {
    setaSucesso(email);
  }

  if (passwordValue === "") {
    setaErro(password, "Senha é necessária");
  } else if (passwordValue.length < 8) {
    setaErro(password, "Senha deve conter mais de 8 caracteres.");
  } else {
    setaSucesso(password);
  }

  if (password2Value === "") {
    setaErro(password2, "Por favor confirme a senha");
  } else if (password2Value !== passwordValue) {
    setaErro(password2, "Senhas são diferentes");
  } else {
    setaSucesso(password2);
  }
};

const validaEmail = (email) => {
  /*Regex*/
  /* \w - Qualquer letra é permitida */
  /* \. - Sem espaço, só ponto é permitido */
  /* {2,4} - Mínimo 2, Máximo 4 */

  const regex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;

  return regex.test(String(email).toLowerCase());
};

const setaErro = (element, message) => {
  const inputControl = element.parentElement;
  const errorDisplay = inputControl.querySelector(".error");

  errorDisplay.innerText = message;
  inputControl.classList.add("error");
  inputControl.classList.remove("success");
};

const setaSucesso = (element) => {
  const inputControl = element.parentElement;
  const errorDisplay = inputControl.querySelector(".error");

  errorDisplay.innerText = "";
  inputControl.classList.add("success");
  inputControl.classList.remove("error");
};
