

let element;
function createball() {
  if (element != undefined) {
        element.remove();
        element = undefined;
  }
   element = Ota.createElementByTagName("div",
  {
  background:"lightblue",
  height:"14px",
  width:"14px",
  position:"absolute",
  left:Math.floor(Math.random()*width) + "px",
  top:Math.floor(Math.random()*height) + "px",
  id:"colisionballforrychlost"
  }
  );
  console.log(element);
  appendElement(array, element);
}







      function colisionballforrychlost() {
        if (element != undefined) {
          const coliballelement = colision(ball, element);
          console.log(coliballelement);
            if (!coliballelement) {
              options.rychlostmice = 44;
              pomocna = 44;
            }
        }

      }
