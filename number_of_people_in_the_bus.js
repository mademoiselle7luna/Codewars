var number = function(busStops){
  let droppedPeople = 0;
  let peopleInBus = 0;
  let result = 0;
  
  for (let i = 0; i < busStops.length; i++){
    peopleInBus += busStops[i][0];
    droppedPeople += busStops[i][1];
  }
  result = peopleInBus - droppedPeople;
  return result;
}