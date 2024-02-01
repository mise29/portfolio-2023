const burger = document.querySelector(".burger");
const nav = document.querySelector(".nav-links");
// querySelectorAll = .nav-links li の全てを取得できる（all）
const navLinks = document.querySelectorAll(".nav-links li");


// burger push
// toggle = class名をつけたり消したりする
burger.addEventListener("click", () => {
    nav.classList.toggle("nav-active");

    navLinks.forEach((link, index) => {
        // humburger-menu を２回目以降押したとき
        if (link.style.animation) {
            link.style.animation = "";
        } else {
            link.style.animation = `navLinksFade 0.5s ease forwards ${index / 7 + 0.4}s`;
        }
    });
    burger.classList.toggle("toggle")
})

// works slider
document.addEventListener("DOMContentLoaded", function () {
    const sliderWrapper = document.querySelector(".works-page");
    const sliderItems = document.querySelectorAll(".box");
  
    // オリジナルのスライダーアイテムをクローンして末尾に追加
    sliderItems.forEach((item) => {
      const clone = item.cloneNode(true);
      sliderWrapper.appendChild(clone);
    });
  });