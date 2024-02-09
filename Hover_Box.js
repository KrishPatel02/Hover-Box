// Default Background Color

document.querySelector("body").style.background =
  "linear-gradient(145deg, #b9c825, #32c0f4)";

// When Mouse enter the box area then below code can be execute

document.querySelector(".boxsec").addEventListener("mouseenter", () => {
  document.querySelector(".boxsec").style.background =
    "linear-gradient(145deg, #2376DD, #FFCF71)";

  document.querySelector("body").style.background =
    "linear-gradient(145deg, #2376DD, #FFCF71)";

  document.querySelector(".boxsec").style.width = "10.5vw";

  document.querySelector(".boxsec").style.height = "10.5vh";

  document.querySelector(".boxsec").style.transition = "0.5s all ease-out";
});

// When Mouse exit the box area then below code can be execute

document.querySelector(".boxsec").addEventListener("mouseout", () => {
  document.querySelector(".boxsec").style.background =
    "linear-gradient(145deg, #b9c825, #32c0f4)";

  document.querySelector("body").style.background =
    "linear-gradient(145deg, #b9c825, #32c0f4)";

  document.querySelector(".boxsec").style.width = "10vw";

  document.querySelector(".boxsec").style.height = "10vh";

  document.querySelector(".boxsec").style.transition = "0.5s all ease-in";
});
