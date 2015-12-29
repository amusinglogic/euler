//Starting in the top left corner of a 2×2 grid, and only being able to move to the right and down, there are exactly 6 routes to the bottom right corner.
//How many such routes are there through a 20×20 grid?

function findPath(n){
  if (typeof n !== 'number'){return false}
  
  var top = 2 * n,
      bottom = n,
      coeff = 1;
      
      for (var x = top - bottom + 1; x <= top; x++){
        coeff *= x;
      }
      for (var x = 1; x <= bottom; x++){
        coeff /=x;
      }
      
      console.log(Math.floor(coeff))
      alert(Math.floor(coeff))
}
findPath(20)