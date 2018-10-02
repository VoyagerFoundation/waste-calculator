export function gramsToStr(grams){  
  if( !grams || grams == 0){
    return "-";
  }
  return getTonnes(grams) + getKilos(grams)  + getGrams(grams);
}

function getTonnes(grams){
  var tonnes = Math.floor(grams/1000000);
  
  if( !tonnes || tonnes == 0){
    return "";
  }
  return tonnes + " t ";
}

function getKilos(grams){
  var kg = Math.floor((grams % 1000000)/1000);
  if( !kg || kg == 0){
    return "";
  }
  return kg + " kg ";
}

function getGrams(grams){
  var gr = Math.ceil((grams % 1000));
  if(gr > 0){
    return gr + " g ";
  }
}
