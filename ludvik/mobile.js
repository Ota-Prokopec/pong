


           //if( /Android|webOS|iPhone|iPad|Mac|Macintosh|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
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
//}
