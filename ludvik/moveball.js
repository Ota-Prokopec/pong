


function moveball(element, colision) {

   velkostskok = Math.floor(Math.random()*444);
  if (colision[1]) {
  }
  else {
        if (colision[2] === "bottom") {
          nahoru(element, "to top");
        }
        else if (colision[2] === "top") {
          nahoru(element, "to bottom");
        }
  }
}
function nahoru(element, value) {
   animation();
  function animation(valueani) {
    if (value === "to bottom") {
        tobottom()
    } else if (value === "to top") {
      totop();
    }
            animationno = window.requestAnimationFrame(animation);
  }



function tobottom() {
    element.style.top = element.offsetTop + 5 + "px";
  //console.log("bottom");
  //window.requestAnimationFrame(animation);
}
function totop() {
  element.style.top = element.offsetTop - 4 + "px";
  //console.log("top");
  //window.requestAnimationFrame(animation);
}
}
