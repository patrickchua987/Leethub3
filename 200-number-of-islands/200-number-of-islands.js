/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
ctr=0;
var current = [];
var gridlength=[];
for (let i = 0; i < grid.length; i++) {
  const element = grid[i];
  gridlength = grid[i];
  for (let j = 0; j <= gridlength.length-1; j++) {
    const element2 = grid[i][j];
    if (grid[i][j] === "1") {
        depthFirstSearch(i, j, grid);
        ctr++;
    }
  }
}
return ctr;
}

function depthFirstSearch(i, j, grid,gridlength) {
  // push in stack current cell
  var stack =[];
  stack.push([i, j]);
  while (stack.length > 0) {
    current = stack.pop();
    z = current[0];
    z2 = current[1];
    grid[z][z2] = ctr + 10;
    // get child
    gridlength = grid[z];
    getchild(z, z2, grid,stack,gridlength);
  }
return;
}


function getchild(z, z2, grid,stack,gridlength) {
  // check below
  if (z + 1 <= grid.length-1) {
    if (grid[z + 1][z2] === "1" && z + 1 <= grid.length-1) stack.push([z + 1, z2]);
  }
  // check left
  if (z2 + 1 <= gridlength.length) {
    if (grid[z][z2 + 1] === "1" && z + 1 <= gridlength.length) stack.push([z, z2 + 1]);
  }
  // check right
  if (z2 > 0) {
    if (grid[z][z2 - 1] === "1" && z2 > 0) stack.push([z, z2 - 1]);
  }
  // check top
  if (z > 0) {
    if (grid[z - 1][z2] === "1") stack.push([z - 1, z2]);
  }
  return;
}
