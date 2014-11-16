require 'prime'

print "Please give integer \n"

pr = gets.chomp.to_i

npr = pr.prime_division.last[0]

puts npr