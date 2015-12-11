//The sum of the primes below 10 is 2 + 3 + 5 + 7 = 17.
//Find the sum of all the primes below two million.
var primeSum = 0;

function isPrime(num){
	var primebool = true;
  for (var p = 2; p <= Math.sqrt(num); p++){
  	if (num % p === 0) { primebool = false; };
  	}
    return primebool;
}

for (var i = 2; i<=2000000; i++){
	if (isPrime(i)) {
  primeSum += i;
  }  
}
console.log(primeSum)


  