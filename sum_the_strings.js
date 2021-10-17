function sumStr(a,b) {
  let result = 0;
  let sum = 0;
  
   if (a === "") {
    a = "0";
  } 
    if (b === "") {
      b = "0";
    }
      result = (parseInt(a, 10) + parseInt(b, 10));
      result = result.toString();

  
  return result;
}