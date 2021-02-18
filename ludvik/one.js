


window.addEventListener("keyup", function (event) {

  ////console.log(event);
  if (event.key === "ArrowUp") {
           map.ArrowUP = false;
  }
  if (event.key === "ArrowDown") {
    map.ArrowDown = false;
  }
  if (event.key === "w") {
    map.w = false;
  }
  if (event.key === "s") {
    map.s = false;
  }
})
function respawnball(element, value) {
  element.style.left = value + "px";
}
