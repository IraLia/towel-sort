
// You should implement your task here.

module.exports = function towelSort (matrix) {
    if (matrix !== [] || matrix == 0) {return [];};
    let sortMatrix = [];
  matrix.forEach((curMatrix, index) => { 
  if (index % 2 !== 0) { sortMatrix = sortMatrix.concat( curMatrix.reverse() ); }
  else { sortMatrix = sortMatrix.concat(curMatrix); } 
 });
  return sortMatrix;
}
