var howManyYears = function(date1, date2){
  let r1 = date1.slice(0, 4);
  let r2 = date2.slice(0, 4);
  
  parseInt(r1, 10);
  parseInt(r2, 10);
  
  return Math.abs(r2 - r1);
}