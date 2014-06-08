#setting var value
i = 20

#until loop with range of integers 1-20
#going by multiples of 20 since it has to be divisible

until (1..20).all? { |x| i % x == 0 }
  i += 20
  end

puts i
