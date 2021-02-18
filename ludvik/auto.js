

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

       if (ball.offsetTop + 44 > playone.offsetTop + playone.offsetHeight) {
         map.s = true;
       }
       else if  (ball.offsetHeight + ball.offsetTop < playone.offsetTop + 44) {
         map.w = true;
       }
       else {
         map.s = false;
         map.w = false;
       }

}
