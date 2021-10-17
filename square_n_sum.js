function squareSum(numbers){
let result = 0;
let square = 0
  
  for (let i = 0; i < numbers.length; i++) {
   square = Math.pow(numbers[i], 2);
   result += square;
  }
    
  return result;
}