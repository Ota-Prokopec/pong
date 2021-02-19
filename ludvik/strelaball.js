

let strela;
let elstrela;
  window.addEventListener("keypress", (e) => {
    if (!norfa) {
      if (e.key === "1") {
        if (strela != undefined) {
          strela.remove();
        }
        vytvorenistrely(playtwo);
      }
      if (e.key === "d") {
        if (strela != undefined) {
          strela.remove();
        }
        vytvorenistrely(playone);
      }
    }

  })

function vytvorenistrely(element) {
    if (norfa === false) {
      strela = Ota.createElementByTagName("div", {
        height:"14px",
        width:"14px",
        background:"blue",
        position:"absolute",
      })
      elstrela = element;
        styleElement({top:element.offsetTop + element.offsetHeight / 2 + "px"}, strela);

      if (element === playtwo) {
        styleElement({left:element.offsetLeft + "px"}, strela);
      }
      else if (element === playone) {
        styleElement({left:element.offsetLeft + element.offsetWidth + "px"}, strela);
      }
      appendElement(array, strela);
    }



}


          function pohybstrely () {


     if (strela != undefined) {
          if (norfa === false) {
            if (elstrela === playtwo) {
              strela.style.left = strela.offsetLeft - 4 +"px";
            }
            else if (elstrela === playone) {
              strela.style.left = strela.offsetLeft + 4 +"px";
            }
            let coel
            if (element != undefined) {
               coel = colision(strela, element);
            }
            if (!coel) {
              if (element != undefined) {
                element.remove();
              }
              options.rychlostmice = 44;
              pomocna = 44;
              if (element != undefined) {
                element.remove();
              }

            }
            const co = colisioninarray(strela, array);
            if (!co[1] && co[2] === "right" || !co[1] && co[2] === "left") {
              strela.remove();

            }
            else {
            }
          }
          }

}
