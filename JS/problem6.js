var sum1 = 0;
var sum2 = 0;
var result = 0;
for (var i=1; i<=100; i++){
  sum2 += i
  sum1+= Math.pow(i, 2);
  
}
sum2 = Math.pow(sum2, 2)
result = sum2-sum1
console.log(result)