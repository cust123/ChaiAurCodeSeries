// first we are getting the random color codes

const randomColor = function () {
  const hex = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += hex[Math.floor(Math.random() * 16)];
  }
  return color;
};
let intervalId;
const myOriginalBgColor = "#212121";
const startChangingColor = function () {
  if (!intervalId) {
    intervalId = setInterval(changeBgColor, 1000);
  }

  function changeBgColor() {
    document.body.style.backgroundColor = randomColor();
  }
};
const stopChangingColor = function () {
  clearInterval(intervalId);
  // intervalId = myOriginalBgColor;
  intervalId = null;

  // if the user wants to display the orginal bg color after clicking,
  // then this pieace of code will work
  if (intervalId === null) {
    document.body.style.backgroundColor = myOriginalBgColor;
  }
};

document.querySelector("#start").addEventListener("click", startChangingColor);

document.querySelector("#stop").addEventListener("click", stopChangingColor);
