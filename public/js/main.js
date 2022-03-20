const simpleColor = document.querySelector(".simple_color");
const hexColor = document.querySelector(".hex_color");
const wrapper = document.querySelector(".wrapper");
const showColor = document.querySelector(".show_color");
const changeColor = document.querySelector(".change_color");
const activeClass = document.querySelector(".active");

// functions
simpleColor.addEventListener("click", () => {
  simpleColor.classList.add("active");
  hexColor.classList.remove("active");
});
hexColor.addEventListener("click", () => {
  hexColor.classList.add("active");
  simpleColor.classList.remove("active");
});

changeColor.addEventListener("click", () => {
  if (simpleColor.classList[1] === "active") {
    const simpleColors = [
      "red",
      "blue",
      "green",
      "yellow",
      "white",
      "purple",
      "crimson",
      "lightpink",
      'pink',
      'hotpink',
      'deeppink',
      'maroon',
      'orchid',
      'thistle',
      'plum',
      'violet',
      'fuchsia',
      'purple',
      'darkviolet',
      'darkorchid',
    ];
    let simpleColo = simpleColors[simpleRandomNumbers()];

    simpleColor.style.backgroundColor = simpleColo;
    showColor.textContent = simpleColo;
    wrapper.style.backgroundColor = simpleColo;
    function simpleRandomNumbers() {
      return Math.floor(Math.random() * simpleColors.length);
    }
  } else if (hexColor.classList[1] === "active") {
    const colors = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
    let hexValue = "#";
    for (let i = 0; i < 6; i++) {
      hexValue += colors[getRandomNumbers()];
    }
    hexColor.style.backgroundColor = hexValue;
    showColor.textContent = hexValue;
    wrapper.style.backgroundColor = hexValue;
    function getRandomNumbers() {
      return Math.floor(Math.random() * colors.length);
    }
  }
});
// ======================counter.js===================
const counter = document.querySelector(".counter");
const btns = document.querySelectorAll(".btn");
let count = 0;

btns.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    let style = e.target.classList[1];
    if (style === "decrease") {
      count--;
    } else if (style === "increase") {
      count++;
    } else {
      count = 0;
    }
    counter.textContent = count;
    if (count > 0) {
      counter.style.color = "green";
    } else if (count < 0) {
      counter.style.color = "red";
    } else if (count === 0) {
      counter.style.color = "#222";
    }
  });
});

// =========================review.js
