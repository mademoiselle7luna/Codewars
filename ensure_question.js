function ensureQuestion(s) {
  let question = "";
    
    if (s.includes("?")){
      question = s;
      }
    else {
      question = s.concat("?");
    }
    return question;
}