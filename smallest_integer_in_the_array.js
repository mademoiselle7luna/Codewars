class SmallestIntegerFinder {
  findSmallestInt(args) {
    let integer = args[0];
      
      for (let i = 0; i < args.length; i++){
        if (args[i] < integer){
          integer = args[i];
        }
      }
    return integer;
  }
}