var min = function(list){
    for (let i = 0; i < list.length; i++) {
        return Math.min.apply(Math, list);
      }
}

var max = function(list){
   for (let i = 0; i < list.length; i++) {
       return Math.max.apply(Math, list);
      }
}