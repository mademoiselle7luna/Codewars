function twiceAsOld(dadYearsOld, sonYearsOld) {
 let twice = 0;
 let time = 0;
  
  twice = sonYearsOld*2;
  time = dadYearsOld - twice;
  return Math.abs(time);
}