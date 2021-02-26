

           if( /Android|webOS|iPhone|iPad|Mac|Macintosh|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
             var previousOrientation = window.orientation;
var checkOrientation = function(){
    if(window.orientation !== previousOrientation){
        previousOrientation = window.orientation;
        turnmobile(previousOrientation);
        movingplay(previousOrientation);
    }
};

window.addEventListener("resize", checkOrientation, false);
window.addEventListener("orientationchange", checkOrientation, false);

             options.rychlostmice = 24;
 window.addEventListener("touchmove", function (event) {
   const touch = event.touches[0].clientY;
     const co = colisioninarray(playtwo, array);
     console.log(co);
   if (co) {
     playtwo.style.top = touch + "px";
   }
   else if (co[1] === false && co[2] === "bottom") {
          playtwo.style.top = playsswo.offsetTop - 14 + "px";
   }
   else if (co[1] === false && co[2] === "top") {
          playtwo.style.top = playtwo.offsetTop + 14 + "px";
   }
 })
}


                  function movingplay(value) {
                    playtwo.style.top = value + "px";
                  }

          function turnmobile(value) {
                if (value < 64 && value > 116) {
                  console.log("turn");
                }
          }
