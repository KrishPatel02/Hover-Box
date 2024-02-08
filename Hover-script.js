document.querySelector(".boxsec").addEventListener("mouseenter", () => {
  document.querySelector(".boxsec").style.background = "lightblue";
  document.querySelector(".boxsec").style.width = "10.2vw";
  document.querySelector(".boxsec").style.height = "10.2vh";
});

document.querySelector(".boxsec").addEventListener("mouseout", () => {
  document.querySelector(".boxsec").style.background = "#009688";
  document.querySelector(".boxsec").style.width = "10vw";
  document.querySelector(".boxsec").style.height = "10vh";
});
