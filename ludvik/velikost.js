

const hra = document.getElementById("hra");

const height = window.innerHeight;
const width = window.innerWidth;
const bod = document.getElementById("bod");
window.addEventListener("load", function (event) {
  windowarray();
})
window.addEventListener("keydown", (e) => {
  //console.log(e);
  if (e.key === "F11") {
    //console.log("ahoj");
    windowarray();
  }
  else if (e.key === "F12") {
    //console.log("ahoj");
    windowarray();
  }
})
function windowarray() {

        bod.style.left = width / 2 - 44*4 + "px";
        hra.style.left = width / 2 - 44 + "px";
        hra.style.height = height + "px"
  array.style.height = height/* - 4*/ + "px";
  array.style.width = width/* - 4*/ + "px";
  playtwo.style.left = width - 44 + "px";
}
