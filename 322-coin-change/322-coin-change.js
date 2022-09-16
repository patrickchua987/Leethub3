/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
// coin change using BFS Breath First Search
var coinChange = function (coins, amount) {
   var queue = [];
  // Base value in queue
  queue.push(amount);
  // put marker for level
  //queue.push(Infinity);
  // Boolean array to check if a number has been seen before
  var seen = new Set();
  // Variable to store depth of BFS
  var leveldepth = 0;

  while (queue.length != 0) {
  
    //finish process until level marker only
	var s = queue.length;
    while (s--) {
      // get first element of the queue
      var bal = queue[0];
      // Base case
      if (!bal) {
      return leveldepth;
      }
      // process first element
      queue.shift();
      // marker for next level
      //if (bal===Infinity)  {
      //   queue.push(Infinity);
      //   break;
     // }
      // if bal already seen bypass
      if (seen.has(bal) || bal < 0) continue;
      // add current to the seen set
      seen.add(bal);
      // push the child element to queue
      for (var i = 0; i < coins.length; i++) queue.push(bal - coins[i]);
    }
    // end of processing of the current level, increment counter
    leveldepth++;
  }
  // if did not encounter zero in all level
  return -1;
}
