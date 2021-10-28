let otherSelector = document.querySelectorAll("nav.others a"); // 버튼 노드리스트
let body = document.querySelector("body");                     // body 태그
let images = document.querySelectorAll(".profile img");        // 프로필 이미지
let usrName = document.querySelector("h1");                    // 이름
let part = document.querySelector(".part");                    // 담당
let email = document.querySelector(".email");                  // 이메일
let icon = document.querySelector("#page");                    // 페이지 아이콘

for (let i = 0; i < otherSelector.length; i++) {
    otherSelector[i].addEventListener("click", event => {
        event.preventDefault();
        changeOn(i, otherSelector);
        changeColor(i + 1);
        changeProfile(i);
    });
}

function changeOn(index, list) {
    //버튼 활성화
    for (let el of list) {
        el.classList.remove("on");
    }
    list[index].classList.add("on");
}

function changeColor(memberNum) {
    //body의 클래스를 번호로 변경하여 css에 맞춤
    body.setAttribute("class", `member${memberNum}`);
}

function changeProfile(memberNum) {
    // 버튼에 맞는 이미지 띄우기
    for (let j = 0; j < images.length; j++) {
        images[j].setAttribute("class", "others");
    }
    images[memberNum].setAttribute("class", "on");

    // 색에 맞게 사용자 정보 변경
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