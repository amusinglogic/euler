var primes = [];

function isPrime(num) {
  if (num === 1) {
    return false
  }
  if (num < 4) {
    return true
  }
  if (num % 2 === 0) {
    return false
  }
  if (num < 9) {
    return true
  }
  if (num % 3 === 0) {
    return false
  }

  var a = Math.floor(Math.sqrt(num));
  var i = 3;
  while (i <= a) {
    for (i = 5; i <= a; i++)
      if (num % i === 0) {
        return false;
      }
    if (num % (i + 2) === 0) {
      return false;
    }
    i = 5;
    return true;
  }
}

for (var j = 2; j <= 105000; j++) {
  if (isPrime(j) === true) {
    primes.push(j);
  }
}
console.log(primes[1000]);