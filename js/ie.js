const ver = navigator.userAgent;
console.log(ver);

const isIE = /trident/i.test(ver);
console.log(isIE);

if (isIE) {
  alert("익스플로러 브라우저로 접속하셨네요. 이 웹 페이지는 익스플로러를 지원하지 않습니다. 다른 브라우저로 접속해주세요.")
}

// 클릭
let otherSelector = document.querySelectorAll("nav.others a");
let body = document.querySelector("body");
let images = document.querySelectorAll(".profile img");
let usrName = document.querySelector("h1");
let part = document.querySelector(".part");
let email = document.querySelector(".email");
let icon = document.querySelector("#page");

for (let i = 0; i < otherSelector.length; i++) {
  otherSelector[i].addEventListener("click", event => {
    event.preventDefault();
    changeOn(i, otherSelector);
    changeColor(i + 1);
    changeProfile(i);
  });
}

function changeOn(index, list) {
  for (let el of list) {
    el.classList.remove("on");
  }
  list[index].classList.add("on");
}

function changeColor(memberNum) {
  body.setAttribute("class", `member${memberNum}`);
}

function changeProfile(memberNum) {
  for (let j = 0; j < images.length; j++) {
    images[j].setAttribute("class", "others");
  }
  images[memberNum].setAttribute("class", "on");

  if (memberNum == 0) {
    usrName.innerText = "Lee Jeonghun";
    part.innerText = "BACKEND DEVELOPER";
    icon.parentElement.setAttribute("href", "https://instagram.com/28_do_it?utm_medium=copy_link");
    icon.setAttribute("class", "fab fab fab fab fa-instagram")
    icon.nextElementSibling.innerText = "My Instagram Page."
    email.innerText = "ukidd002@gmail.com";
  }
  else if (memberNum == 1) {
    usrName.innerText = "Kim Byungchang";
    part.innerText = "PROFESSOR";
    icon.parentElement.setAttribute("href", "https://facebook.com");
    icon.setAttribute("class", "fab fab fab fab fab fab fa-facebook");
    icon.nextElementSibling.innerText = "My Facebook Page."
    email.innerText = "bckim@cu.ac.kr";
  }
  else if (memberNum == 2) {
    usrName.innerText = "Jeong Seunggyun";
    part.innerText = "FRONTEND DEVELOPER";
    icon.parentElement.setAttribute("href", "https://github.com/seunggyun-jeong");
    icon.setAttribute("class", "fab fab fab fab fab fa-github");
    icon.nextElementSibling.innerText = "My Github Page."
    email.innerText = "jskyun98@gmail.com";
  }
  else {
    usrName.innerText = "Hong Gildong";
    part.innerText = "WEB PUBLISHER";
    icon.parentElement.setAttribute("href", "https://linkedin.com");
    icon.setAttribute("class", "fab fab fab fab fab fab fab fa-linkedin");
    icon.nextElementSibling.innerText = "My LinkedIn Page."
    email.innerText = "culove@cu.ac.kr";
  }
}