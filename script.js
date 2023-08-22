"use strict";

const btnLogin = document.querySelector(".login");
const blurBack = document.querySelector(".modal-background");
const modalLogin = document.querySelector(".modal-login");
const modalNew = document.querySelector(".new");

const openAndCloseModalWindowLogin = function () {
  blurBack.classList.toggle("hidden");
  modalLogin.classList.toggle("hidden");
};

btnLogin.addEventListener("click", openAndCloseModalWindowLogin);
blurBack.addEventListener("click", openAndCloseModalWindowLogin);
