
let autohrac = 0
document.getElementById("auto").addEventListener("click", function (event) {
       wantauto = true;
       zobrazeni();
})
document.getElementById("noauto").addEventListener("click", function (event) {
       wantauto = false;
       zobrazeni();
})
function zobrazeni() {
  document.getElementById("options").style.display = "none";
  document.getElementById("start").style.display = "block";
document.getElementById("wrap").style.display = "block";
}
function auto() {
  autohrac ++;
       if (ball.offsetTop + 44 > playone.offsetTop + playone.offsetHeight) {
         if (autohrac < 2) {
           map.s = true;
         }
         else if (autohrac > 1) {
           setTimeout(() => {map.s = true;}, 444);
         }

       }
       else if  (ball.offsetHeight + ball.offsetTop < playone.offsetTop + 44) {
         setTimeout(() => {map.w = true;}, 444);
       }
       else {
         map.s = false;
         map.w = false;
       }


}
