
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

  posionstarttomobile();
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
          map.s = true;
         }

       }
       else if  (ball.offsetHeight + ball.offsetTop < playone.offsetTop + 44) {
         map.w = true;
       }
       else {
         map.s = false;
         map.w = false;
       }


}




                         function posionstarttomobile() {
                           if( /Android|webOS|iPhone|iPad|Mac|Macintosh|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
                             const start = document.getElementById("start");
                             start.style.position = "relative";
                             start.style.left = "371.4px";
                }


                         }
