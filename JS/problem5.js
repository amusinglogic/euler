var i = 20;
var j = 1;
while (j <=20){
  if (j == 20 && i % j == 0){console.log(i); break;}
  if (i % j !== 0){i +=20; j = 1;} 
  if (i % j === 0){j++;}
}