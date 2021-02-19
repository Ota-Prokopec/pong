const vyhra = document.getElementById("vyhra");
vyhra.addEventListener("input", () => {
  options.vyhra = parseInt(vyhra.value);
})
const delkaodrazustrana = document.getElementById("delkaodrazustrana");
delkaodrazustrana.addEventListener("input", () => {
  options.delkaodrazustrana = parseInt(delkaodrazustrana.value);
})
const win = document.getElementById("win");
win.addEventListener("input", () => {
  options.win = parseInt(win.value);
})
