let burger = document.querySelector(".closed");
let x = document.querySelector(".opened");
let div = document.querySelector(".column4");
let last = document.querySelector(".last");
let a = document.querySelectorAll(".mynav");

for (let i of a) {
  i.addEventListener("click", () => {
    div.style.display = "none";
    burger.style.display = "inline";
    x.style.display = "none";
    last.classList.remove("blur");
  });
}

burger.addEventListener("click", () => {
  div.style.display = "block";
  burger.style.display = "none";
  x.style.display = "inline-block";
  last.classList.add("blur");
});

x.addEventListener("click", () => {
  div.style.display = "none";
  burger.style.display = "inline";
  x.style.display = "none";
  last.classList.remove("blur");
});
