#! /usr/bin/ruby

#The sum of the primes below 10 is 2 + 3 + 5 + 7 = 17.

#Find the sum of all the primes below two million.

timer_start = Time.now

#requiring prime module
require 'prime'
#setting the sum = 0 to add variables
sum = 0
#calling the prime iterator up to 2 million.  Do sets the variable to prime
Prime.each(2000000) do |prime|
  #adding the prime numbers to sum
  sum+=prime
end
#print sum
puts sum
  puts "Elapsed Time: #{(Time.now - timer_start)*1000} milliseconds"