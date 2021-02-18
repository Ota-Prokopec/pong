

const ball = document.getElementById("ball");
let pocet = Math.floor(Math.random()*2);
const b1 = document.getElementById("bodjedna");
const b2 = document.getElementById("boddva");
let colisionball = colisioninarray(ball, array);
const moveballss = moveball(ball, colisionball);
let leftstrana = 0;
let rightstarana = 0;
function balles() {
  const cooneside = colision(ball, playtwo);
  const cotwoside = colision(ball, playone);

    removerequest = window.requestAnimationFrame(play);
    function play() {
      colisionball = colisioninarray(ball, array);
     moveball(ball, colisionball);
     animate();
    }

    function animate() {

      if (pocet % 2) {
        if (cooneside) {
            ball.style.left = ball.offsetLeft + 16 + "px";
        }
        else {
          pocet ++;
            ball.style.left = ball.offsetLeft - 16 + "px";
        }
      }
      else {
        if (cotwoside) {
            ball.style.left = ball.offsetLeft - 16 + "px";
        }
        else {
          pocet ++;
            ball.style.left = ball.offsetLeft + 16 + "px";
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
          b1.innerHTML = "win";
          b2.innerHTML = "lose";
          leftstrana = 0;
          rightstrana = 0;
        }
        else {
          b1.innerHTML = leftstrana;
        }
        respawnball(ball, 422);
      }
      else if (colisionball[2] === "left") {
        rightstarana ++;
        if (rightstarana === options.vyhra) {
          b1.innerHTML = "lose";
          b2.innerHTML = "win";
          leftstrana = 0;
          rightstarana = 0;
        }
        else {
          b2.innerHTML = rightstarana;
        }
        respawnball(ball, 422);
      }
    }
  }


}
