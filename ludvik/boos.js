let prvnibodpouzit = 0;
let druhybodpouzit = 0;
let rychlostmemory = 0;
window.addEventListener("keydown", function (event) {
  rychlostmemory = options.rychlostmice;
     if (event.key === "Enter") {
       if (prvnibodpouzit < rightstarana) {
         console.log("turbo");
         options.rychlostmice = 51;
         prvnibodpouzit ++;
       }
       setTimeout(() => {
           rychlostmeneni();
       }, 44);

     }
     if (event.key === "e") {
       if (druhybodpouzit < leftstrana) {
         console.log("turbo");
         options.rychlostmice = 51;
         druhybodpouzit ++;
       }
       setTimeout(() => {
         options.rychlostmice = rychlostmemory;
           rychlostmeneni();
       }, 44);

     }
} )
