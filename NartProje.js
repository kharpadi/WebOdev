"use strict";

const gonder = document.querySelector(".btn");
const temizle = document.querySelector(".btn2");
const isim = document.querySelector(".isim");
const soyisim = document.querySelector(".soyisim");
const email = document.querySelector(".email");
const gender = document.querySelector(".gender");
const borntime = document.querySelector(".borntime");
const mesaj = document.querySelector(".mesaj");
const erkek = document.getElementById("erkek");
const kadın = document.getElementById("kadin");
const sehir = document.getElementById("sehir");

gonder.addEventListener("click", function () {
  if (
    isim.value === "" ||
    soyisim.value === "" ||
    email.value === "" ||
    borntime.value === "" ||
    mesaj.value === "" ||
    (erkek.checked === false && kadın.checked === false) ||
    sehir.value === ""
  ) {
    alert("Lütfen tüm boşlukları doldurunuz!");
  }
});

temizle.addEventListener("click", function (e) {
  e.preventDefault();
  isim.value = soyisim.value = email.value = borntime.value = mesaj.value = "";
  sehir.value = "";
  erkek.checked = kadın.checked = false;
});
