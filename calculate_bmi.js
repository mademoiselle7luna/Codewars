function bmi(weight, height) {
  let result = "";
  
    if ((weight/Math.pow(height,2)) <= 18.5){
      result = "Underweight";
      }
    else if ((weight/Math.pow(height,2)) <= 25){
      result = "Normal";
      }
    else if ((weight/Math.pow(height,2)) <= 30){
      result = "Overweight";
    }
  else if ((weight/Math.pow(height,2)) > 30){
      result = "Obese";
  }
  return result;
} 