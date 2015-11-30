var start = 100;
var end = 999;
var winners = [];
var temp=[];

for (var i= start; i <= end; i++){
  for (var j = end; j >= start; j--){
   temp = (i * j)
   if (temp.toString().split('').reverse().join('') === temp.toString()){
   
   winners.push(temp);
     
    }
   
   }
}
console.log(winners.sort(function(a, b){return a-b}).pop())
