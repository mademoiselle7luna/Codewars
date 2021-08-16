function countPositivesSumNegatives(input) {
    let count = 0;
    let sum = 0;
    let array = [];
  
  
    if (input === null || input.length === 0) {
      return array;
      }
    for (let i = 0; i < input.length; i++) {
      if (input[i] != 0 && input[i] > 0){
        count++;
      }
      else if (input[i] < 0){
        sum += input[i];
      }
    }
    array.push(count, sum);
    return array;
}
