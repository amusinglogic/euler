var numArr = ["0802229738150040007504050778521250779108","4949994017811857608717409843694804566200","8149317355791429937140675388300349133665","527095230460114269246856013,567137023691","2231167151676389419236542240402866331380","2447326099034502447533537836842035171250","3298812864236710263840675954706618386470","67262068026212,0956394396308409166499421","2455580566739926971778789683148834896372","2136230975007644204535140061339734313395","7817532822753167159403800462161409535692","16,9054296353147555888240017542436298557","8656004835718907054444374460215851541758","1980816805944769287392138652177704895540","04520883973599160797573216262679,3279866","8836688757622072034633674655123263935369","0442167338253911249472180846293240627636","2069364172302388346299698267598574043616","20733529783190017431,9714886811623570554","0170547183515469169233486143520189196748"];
var highestProd = 0;
//split arrays into two digits
for (var values in numArr){
  numArr[values] = numArr[values].match(/.{2}/g);
}
//loop through rows
for (var r = 0; r < 20; r++){
  
  //horizontal products
  for (var k = 0; k < 20; k++){
    if (r <= 19 && k < 16){
    var horiz = (numArr[r][k] * numArr[r][k + 1] * numArr[r][k + 2] * numArr[r][k + 3]);
    if (horiz > highestProd) { highestProd = horiz}
    }
  }
  
  //vertical products
  for (var i = 0; i < 20; i++){
    if (r < 16){
    if ( (numArr[r][i] * numArr[r+1][i] * numArr[r+2][i] * numArr[r+3][i]) > highestProd) { highestProd = (numArr[r][i] * numArr[r+1][i] * numArr[r+2][i] * numArr[r+3][i]);}
    }
  }
  //diag right
  if (r < 16) {
    for (var l = 0; l<20; l++){
    if ( (numArr[r][l] * numArr[r+1][l+1] * numArr[r+2][l+2] * numArr[r+3][l+3]) > highestProd) { highestProd = (numArr[r][l] * numArr[r+1][l+1] * numArr[r+2][l+2] * numArr[r+3][l+3]);}
    }
  }
  //diag left
  if (r < 16) {
    for (var m = 0; m<16; m++){
    if ( (numArr[r][m+3] * numArr[r+1][m+2] * numArr[r+2][m+1] * numArr[r+3][m]) > highestProd) { highestProd = (numArr[r][m+3] * numArr[r+1][m+2] * numArr[r+2][m+1] * numArr[r+3][m]);}
    }
  }
}


console.log(highestProd);