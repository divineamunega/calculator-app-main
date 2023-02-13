"use strict";

// Calculator Code
const screen = document.querySelector(".screen");
const numberButton = document.querySelectorAll(".number");
const equal = document.querySelector(".equal");
const deleteBtn = document.querySelector(".reset_del");
const reset = document.querySelector(".reset");
let evaluate = 0;
screen.textContent = "0";

deleteBtn.addEventListener("click", function () {
  if (screen.textContent !== "0") {
    if (screen.textContent.length === 1) {
      screen.textContent = "0";
    } else {
      screen.textContent = screen.textContent.slice(0, -1);
    }
  }
});
reset.addEventListener("click", function () {
  screen.textContent = "0";
});

for (let i = 0; i < numberButton.length; i++) {
  numberButton[i].addEventListener("click", function () {
    if (screen.textContent.length <= 11) {
      if (screen.textContent == 0) {
        screen.textContent = numberButton[i].value;
      } else {
        screen.textContent += numberButton[i].value;
      }
    }
  });
}

equal.addEventListener("click", function () {
  const result = eval(screen.textContent);
  if (String(result).length > 11) {
    screen.textContent = result.toFixed(11);
  } else {
    screen.textContent = result;
    console.log("Divinnne");
  }
});

// Change theme Code
const slider = document.querySelector(".slider");
const root = document.querySelector(":root");
const round = document.querySelector(".round");
const description = document.querySelector(".description");
let counter = 0;

slider.addEventListener("click", function () {
  if (counter >= 0) {
    counter++;
    if (counter === 3) {
      counter = 0;
    }
  }
  if (counter === 1) {
    round.style.left = "25px";
    root.style.setProperty("--backGround", "hsl(0, 0%, 90%)");
    root.style.setProperty("--keypadBackground", "hsl(0, 5%, 81%)");
    root.style.setProperty("--toggleBackground", "hsl(0, 5%, 81%)");
    root.style.setProperty("--screenBackground", "hsl(0, 0%, 93%)");
    root.style.setProperty("--equals_toggle_color", "hsl(25, 98%, 40%)");
    root.style.setProperty(
      "--delete_Reset_key_Background",
      "hsl(185, 42%, 37%)"
    );
    root.style.setProperty("--delete_Reset_key_Shadow", "hsl(185, 58%, 25%)");
    root.style.setProperty("--equals_toggle_shadow", "hsl(25, 99%, 27%)");
    root.style.setProperty("--other_keys_background", "hsl(45, 7%, 89%)");
    root.style.setProperty("--other_keys_shadow", "hsl(35, 11%, 61%)");
    root.style.setProperty("--keyColor", "hsl(60, 10%, 19%)");
    root.style.setProperty("--keyColor2", "white");
    equal.style.color = "white";
    deleteBtn.style.color = "white";
    reset.style.color = "white";
    screen.style.color = "hsl(60,10%,19%)";
    description.style.setProperty("color", "hsl(60, 10%, 19%)");
  }
  if (counter === 2) {
    round.style.left = "50px";
    root.style.setProperty("--backGround", " hsl(268, 75%, 9%)");
    root.style.setProperty("--keypadBackground", "hsl(268, 71%, 12%)");
    root.style.setProperty("--toggleBackground", "hsl(268, 71%, 12%)");
    root.style.setProperty("--screenBackground", "hsl(268, 71%, 12%)");
    root.style.setProperty("--equals_toggle_color", "hsl(176, 100%, 44%)");
    root.style.setProperty(
      "--delete_Reset_key_Background",
      "hsl(281, 89%, 26%)"
    );
    root.style.setProperty("--delete_Reset_key_Shadow", "hsl(285, 91%, 52%)");
    root.style.setProperty("--equals_toggle_shadow", "hsl(177, 92%, 70%)");
    root.style.setProperty("--other_keys_background", "hsl(268, 47%, 21%)");
    root.style.setProperty("--other_keys_shadow", "hsl(290, 70%, 36%)");
    root.style.setProperty("--keyColor", "hsl(52, 100%, 62%)");
    root.style.setProperty("--keyColor2", "white");
    deleteBtn.style.color = "white";
    reset.style.color = "white";
    screen.style.color = "hsl(52, 100%, 62%)";
    description.style.setProperty("color", "hsl(52, 100%, 62%)");
  }
  if (counter === 0) {
    round.style.left = "4px";
    root.style = "root";
    screen.style.color = "white";
    description.style.setProperty("color", "white");
    equal.style.color = "white";
  }
});
