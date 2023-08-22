"use strict";

const btnLogin = document.querySelector(".login");
const btnSignIn = document.querySelector(".sign");

const blurBack = document.querySelector(".modal-background");

const modalLogin = document.querySelector(".modal-login");
const modalNew = document.querySelector(".new");

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

// btnSignIn.addEventListener("click", function (e) {
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
//   modalNew.classList.toggle("hidden");
// });

const openModalWindowLogin = function () {
  blurBack.classList.remove("hidden");
  modalLogin.classList.remove("hidden");
};

const closeModalWindowLogin = function () {
  blurBack.classList.add("hidden");
  modalLogin.classList.add("hidden");
};

btnLogin.addEventListener("click", openModalWindowLogin);
blurBack.addEventListener("click", closeModalWindowLogin);

btnSignIn.addEventListener("click", function (e) {
  e.preventDefault();
  if (inputExistEmail.value == "" || inputExistPassword.value == "") {
    alert("Для регистрации введите e-mail и пароль!");
  } else {
    alert(
      `Ваш e-mail: ${inputExistEmail.value}, Ваш пароль: ${inputExistPassword.value}`
    );
  }
});

const openModalWindowCreat = function () {
  modalLogin.classList.add("hidden");
  modalNew.classList.remove("hidden");
};

linkRegisterAccount.addEventListener("click", openModalWindowCreat);
