//A Pythagorean triplet is a set of three natural numbers, a < b < c, for which,
//a2 + b2 = c2
//For example, 32 + 42 = 9 + 16 = 25 = 52.

//There exists exactly one Pythagorean triplet for which a + b + c = 1000.
//Find the product abc.

var start = new Date().getTime();

var answer = 0;

for (var i = 1; i <= 1000; i ++){
  for (var j = 1; j<=1000; j++){
    for (var k = 1; k<= 1000; k++){
     if ((j * j) + (i * i) === (k * k) && i + j + k === 1000){
        console.log("i = " + i + " j = " + j + " k = " + k);
        answer = j * i * k
        console.log(answer);
     }
    }
  }
}

var end = new Date().getTime();
var time = end - start;
console.log('Execution time: ' + time);