let hrs = document.querySelector(".hrs");
let min = document.querySelector(".min");
let sec = document.querySelector(".sec");

setInterval(() => {
  let currentTime = new Date();
  hrs.textContent =
    (currentTime.getHours() < 10 ? "0" : "") + currentTime.getHours();
  min.textContent =
    (currentTime.getMinutes() < 10 ? "0" : "") + currentTime.getMinutes();
  sec.textContent =
    (currentTime.getSeconds() < 10 ? "0" : "") + currentTime.getSeconds();
}, 1000);

///////////////////////////////////////////////////////////////////////////
////ну или такой вариант где просто по локалке берем время через intl//////
///////////////////////////////////////////////////////////////////////////

// setInterval(() => {
//   const date = new Intl.DateTimeFormat(navigator.language, {
//     hour: "numeric",
//     minute: "numeric",
//     second: "numeric",
//   }).format(new Date());
//   document.querySelector(".clock").textContent = date;
// }, 1000);
