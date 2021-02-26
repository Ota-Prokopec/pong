function colisioninarray(element, array) {
  const element__top = element.offsetTop ;
  const array__top = array.offsetTop;
  const element__left = element.offsetLeft;
  const array__left = array.offsetLeft;
  const element__bottom = element__top + element.offsetHeight;
  const element__right = element__left + element.offsetWidth;
  const array__bottom = array__top + array.offsetHeight;
  const array__right = array__left + array.offsetWidth;
  const colisionisnot = element__top > array__top && element__left > array__left && element__bottom < array__bottom && element__right < array__right
  || element__top === array__top &&
   element__left === array__left
   && element__bottom === array__bottom &&
    element__right === array__right;
    ////console.log(element__top > array__top && element__left > array__left && element__bottom < array__bottom && element__right > array__right);
  if (colisionisnot) {

    return true;

  }
  else {
//////////////////////////////////////////////////////////////////////////////////////jjjjjjjjjjjjjjjjjjjjjjjjjjjjj
       if (element__top < array__top || element__top == array__top) {
                      return [element.id, false, "top"];
       }
        if (element__bottom > array__bottom || element__bottom === array__bottom) {
                      return [element.id, false, "bottom"];
       }
       if (element__left < array__left || element__left == array__left) {
                      return [element.id, false, "left"];
       }
        if (element__right > array__right || element__right === array__right) {
                      return [element.id, false, "right"];
       }
       else {
               return false;
       }
  }
}








function colision(element, secondelement) {
    const el__left = element.offsetLeft;
    const el__top = element.offsetTop;
    const el__right = element.offsetLeft + element.offsetWidth;
    const el__bottom = element.offsetTop + element.offsetHeight;
    const array__top = secondelement.offsetTop;
    const array__right = secondelement.offsetLeft + secondelement.offsetWidth;
    const array__bottom = secondelement.offsetTop + secondelement.offsetHeight;
    const array__left = secondelement.offsetLeft;

    //////console.log(el__right > array__left && array__right > el__left && el__top < array__bottom && array__top < el__bottom);
    if ( el__right > array__left && array__right > el__left && el__top < array__bottom && array__top < el__bottom  ) {
      //console.log("colision");
      if (el__bottom < array__top + options.delkaodrazustrana) {
        nahoru(ball, "to top");
        //console.log("top");
      }
      if (el__top > array__bottom - options.delkaodrazustrana) {
        nahoru(ball, "to bottom");
        //console.log("bottom");
      }
      return false;

    }
    else {
      return true;
    }
}
