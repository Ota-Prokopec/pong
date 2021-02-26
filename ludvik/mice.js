

const ball = document.getElementById("ball");
let pocet = Math.floor(Math.random()*2);
const b1 = document.getElementById("bodjedna");
const b2 = document.getElementById("boddva");
let colisionball = colisioninarray(ball, array);
const moveballss = moveball(ball, colisionball);
let leftstrana = 0;
let rightstarana = 0;
let rightwin = 0;
let leftwin = 0;
function balles() {

  wins();
  const cooneside = colision(ball, playtwo);
  const cotwoside = colision(ball, playone);


      play();
    function play() {
      colisionball = colisioninarray(ball, array);
     moveball(ball, colisionball);


     for (let pos = 0; pos < options.rychlostmice; pos++) {
       animate();
     }
    }

    function animate() {

      if (pocet % 2) {
        if (cooneside) {
            ball.style.left = ball.offsetLeft + 1 + "px";
        }
        else {
          pocet ++;
              rychlostmeneni();
            ball.style.left = ball.offsetLeft - 1 + "px";
        }
      }
      else {
        if (cotwoside) {
            ball.style.left = ball.offsetLeft - 1 + "px";
        }
        else {
          pocet ++;
              rychlostmeneni();
            ball.style.left = ball.offsetLeft + 1 + "px";
        }
      }

    }
  if (colisionball[1]) {

  }
  else {
    if (colisionball[0] === "ball") {
      if (colisionball[2] === "right") {
        leftstrana ++;
        if (leftstrana === options.vyhra) {
        leftwin ++;
        b2.innerHTML = "lost";
        b1.innerHTML = "win";
          nullthis();
        }
        else {
          b1.innerHTML = leftstrana;
        }
        respawnball(ball, 422);
      }
      else if (colisionball[2] === "left") {
        rightstarana ++;
        if (rightstarana === options.vyhra) {
          rightwin ++;
          b2.innerHTML = "win";
          b1.innerHTML = "lost";
          nullthis();
        }
        else {
          b2.innerHTML = rightstarana;
        }
        respawnball(ball, 422);
      }
    }

  }


}

function wins() {
  if (rightwin === options.win || leftwin === options.win) {
    if (rightwin > leftwin) {
      b2.innerHTML = "win everything";
      options.rychlostmice = 0;
    }
    else if (leftwin > rightwin) {
      b1.innerHTML = "win everything";
      options.rychlostmice = 0;
    }
           setTimeout(() => {
             window.location.reload();
           } ,1444);
  }

}
/*norfa, mod*/
function rychlostmeneni() {
  //rychlostmic
  if (norfa != undefined) {
  if (!norfa) {
    options.rychlostmice --;
    pomocna --;
    if (pomocna > 44) {
      options.rychlostmice = 4;
    }
  if (pomocna < 4) {
    options.rychlostmice = 4;
    pomocna = 144444444444444444444;
    createball();
    //element.remove();
  }
  }
  else if (norfa) {
    options.rychlostmice = Math.floor(Math.random()*44);
    if (options.rychlostmice < 4 || options.rychlostmice === 4) {
      options.rychlostmice = 4;
    }
  }}

  /*norfa, mod*/
  /*norfa, mod*/
  /*norfa, mod*/
  /*norfa, mod*/

}
function nullthis() {
  leftstrana = 0;
  rightstarana = 0;
  pomocna = 44;
  options.rychlostmice = pomocnarychlost;
  if (element != undefined) {
    element.remove();
  }
  prvnibodpouzit = 0;
  druhybodpouzit = 0;
}
