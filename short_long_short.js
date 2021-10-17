function solution(a, b){
  let result = "";
  
      if (a.length < b.length) {
        result = a + b + a;
      }
      else {
        result = b + a + b;
      }
    return result;
}