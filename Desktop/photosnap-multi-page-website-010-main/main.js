const menuBtn = document.querySelector(".icon");
const closeBtn = document.querySelector(".close");
const menuBox = document.querySelector(".menu-box");
const btn = document.getElementById("btn");
const btn2 = document.querySelector(".btn");

menuBtn.addEventListener("click", () => {
  menuBtn.style.display = "none";
  closeBtn.style.display = "block";
  menuBox.style.display = "flex";
  btn.style.display = "flex";
  btn2.style.display = "flex";
});

closeBtn.addEventListener("click", () => {
  closeBtn.style.display = "none";
  menuBtn.style.display = "block";
  menuBox.style.display = "none";
  btn.style.display = "none";
  btn2.style.display = "none";
});
