
const playtwo = document.getElementById("play__two");
let wantauto = false;
let velkostskok = Math.floor(Math.random()*444) + 144;
let animationno;
let removerequest;
/*options here, you can do another if you will look to options.js*/
const options = {
   vyhra : 4,
   delkaodrazustrana : 44,
   rychlostmice :44,
  rychlost__play :14,
  napodobeninaryhlost:44,
  win:4
}
let pomocna = 44;
/*options*/
const playone = document.getElementById("play__one");
const array = document.getElementById("array");
let rychlost;
/*map of arrow*/
const map = {
  ArrowUP:false,
  ArrowDown:false,
  s:false,
  w:false
};
/*map*/
/*first keydown event*/
window.addEventListener("keydown", function (event) {

  //////console.log(event);
  if (event.key === "ArrowUp") {
           map.ArrowUP = true;
  }
  if (event.key === "ArrowDown") {
    map.ArrowDown = true;
  }
  if (event.key === "w") {
    map.w = true;
  }
  if (event.key === "s") {
    map.s = true;
  }

})
/*keydown*/
let pocetstart = 0;
let framecancel;
/*cancel of frames in window.requestAnimationFrame*/ // => =>
function dontfunction() {                                   //>
  window.cancelAnimationFrame(framecancel);                     //>
  window.cancelAnimationFrame(removerequest);                       //>
  window.cancelAnimationFrame(animationno);                               //>
}                                                                              //>
document.getElementById("start").addEventListener("click", function (event) {  //>
                                                                                //>
  pocetstart ++;   /////////////////////////////////////////////////////////////  <
  if (pocetstart % 2) { ///////////here is frame of funciont dontfuncion<
      document.getElementById("start").innerHTML="stop";
    framecancel = window.requestAnimationFrame(push);
  }
  else {
      /*remove request same like at dontfunction*/
    window.cancelAnimationFrame(framecancel);
    window.cancelAnimationFrame(removerequest);
    window.cancelAnimationFrame(animationno);
  }


})
///////////*push starts everything*/
function push() {
  if (wantauto) {
    auto();
  }
  pohybstrely();
    klavesa();
      balles();
    coli();
    colisionballforrychlost();
    framecancel = window.requestAnimationFrame(push);
}
  function klavesa() {
    if (map.ArrowUP === true) {
      ////arrowup
        playtwo.style.top = playtwo.offsetTop - 16 + "px";
    }
    if (map.ArrowDown === true) {
      ////arrowdown
      playtwo.style.top = playtwo.offsetTop + 16 + "px";
    }
    if (map.s === true) {
        playone.style.top = playone.offsetTop + 16 + "px";
    }
    if (map.w === true) {
      playone.style.top = playone.offsetTop - 16 + "px";
    }
  }
  function coli() {
    const co = colisioninarray(playtwo, array);
    ////console.log(co[0], co[1], co[2]);
 if (co[1] && co[2] === "bottom" || co[1] && co[2] === "top") {
   //////console.log(map.ArrowUP);

 }
 else {
   if (co[0] === "play__two") {
     if (co[2] === "top") {
       playtwo.style.top = playtwo.offsetTop + 16 + "px";
     }
     if (co[2] === "bottom") {
       playtwo.style.top = playtwo.offsetTop - 16 + "px";
     }
   }
    const co1 = colisioninarray(playone, array);
   if (co1[0] === "play__one") {
     if (co1[2] === "top") {
       playone.style.top = playone.offsetTop + 16 + "px";
     }
     if (co1[2] === "bottom") {
       ////console.log("ahoj");
       ////console.log("ahoj");
       playone.style.top = playone.offsetTop - 16 + "px";
     }
   }
   }
  }
