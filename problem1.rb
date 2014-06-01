#find all natural numbers divisible by 3 and 5 
#through 1000 and add them
#start with 0
nat = 0

#start counter, two dots is inclusive, we don't want 1000
#each breaks up the array
#in pipes is the element, the block is on the next line
#using do lets us break up instead of having them in {|x| x+x}

(1...1000).each do |x|
  #change the variable value based on the if parameters
  #add in the modulus % that divides by the numbers
  #if it is equal to 0 then it will return
  #|| is or so either one will work and return true
  nat = nat + x if (x % 3 == 0) || (x % 5 == 0)
end
puts nat
    