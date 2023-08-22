"use strict";

const btnLogin = document.querySelector(".login");
const btnSignInLogin = document.querySelector("#submit-login");
const btnSignInCreate = document.querySelector("#submit-create");

const blurBack = document.querySelector(".modal-background");

const modalLogin = document.querySelector(".modal-login");
const modalCreate = document.querySelector(".new");

const inputExistEmail = document.querySelector("#email");
const inputExistPassword = document.querySelector("#password");
const inputCreatEmail = document.querySelector("#email-creat");
const inputCreatPassword = document.querySelector("#password-creat");

const linkRegisterAccount = document.querySelector(".register");

// const openAndCloseModalWindowLogin = function () {
//   blurBack.classList.toggle("hidden");
//   modalLogin.classList.toggle("hidden");
// };

// btnLogin.addEventListener("click", openAndCloseModalWindowLogin);
// blurBack.addEventListener("click", openAndCloseModalWindowLogin);

// btnSignInLogin.addEventListener("click", function (e) {
//   e.preventDefault();
//   if (inputEmail.value == "" || inputPassword.value == "") {
//     alert("Для регистрации введите e-mail и пароль!");
//   } else {
//     alert(
//       `Ваш e-mail: ${inputEmail.value}, Ваш пароль: ${inputPassword.value}`
//     );
//   }
// });

// linkRegisterAccount.addEventListener("click", function () {
//   modalLogin.classList.toggle("hidden");
//   modalCreate.classList.toggle("hidden");
// });

const openModalWindowLogin = function () {
  blurBack.classList.remove("hidden");
  modalLogin.classList.remove("hidden");
};

const closeModalWindowLogin = function () {
  blurBack.classList.add("hidden");
  modalLogin.classList.add("hidden");
  modalCreate.classList.add("hidden");
};

btnLogin.addEventListener("click", openModalWindowLogin);
blurBack.addEventListener("click", closeModalWindowLogin);

btnSignInLogin.addEventListener("click", function (e) {
  e.preventDefault();
  if (inputExistEmail.value == "" || inputExistPassword.value == "") {
    alert("Для регистрации введите e-mail и пароль!");
  } else {
    alert(
      `Ваш e-mail: ${inputExistEmail.value}, Ваш пароль: ${inputExistPassword.value}`
    );
    inputExistEmail.value = "";
    inputExistPassword.value = "";
  }
});

const openModalWindowCreate = function () {
  modalLogin.classList.add("hidden");
  modalCreate.classList.remove("hidden");
};

linkRegisterAccount.addEventListener("click", openModalWindowCreate);

btnSignInCreate.addEventListener("click", function (e) {
  e.preventDefault();
  if (inputCreatEmail.value == "" || inputCreatPassword.value == "") {
    alert("Для регистрации введите e-mail и пароль!");
  } else {
    alert(
      `Ваш e-mail: ${inputCreatEmail.value}, Ваш пароль: ${inputCreatPassword.value}`
    );
    inputCreatEmail.value = "";
    inputCreatPassword.value = "";
  }
});
