// Problem 1 - Find sum of multiples of 3 and 5 up to 1000
//http://projecteuler.net/problem=1

var result = 0

for (i = 1; i < 1000; i++) {
  if (i % 3 === 0) {
    result = i + result;
  } else if (i % 5 === 0) {
    result += i;
  }
}
console.log(result)