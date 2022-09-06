/**
 * @param {number[]} gas
 * @param {number[]} cost
 * @return {number}
 */
var canCompleteCircuit = function(gas, cost) {
var totalg = 0;
var gastotal = 0;
var costtotal = 0;
var leftover = 0;
startstation = 0;
if (gas.length===1 ) {
    if (gas[0]-cost[0] >=0) {
        console.log(0);
        return 0;
    }else {
        console.log(-1);
         return -1;
    }
}
for (let index = 0; index <= gas.length - 1; index++) {
  const element = gas[index];
  gastotal = gas[index];
  costtotal = cost[index];
  leftover = gastotal - costtotal;
  if (leftover > 0) {
    // check
    totalg = 0;
    for (let j = index; j <= gas.length - 1; j++) {
      //const element = gas[j];
      totalg = totalg + (gas[j] - cost[j]);
      if (totalg < 0) break;
    }
    console.log(totalg);
    if (totalg >= 0  && index !=0) {
      for (let z = 0; z < index; z++) {
        totalg = totalg + (gas[z] - cost[z]);
        if (totalg < 0) break;
      }
    }
    console.log(totalg);

    if (totalg >= 0) {
        console.log(index);
      return index;
      
      break;
        
    }
  }
}
  console.log(-1);
  return -1;
}
