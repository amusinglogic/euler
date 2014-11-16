#declaring the variables
i = 0
n = 0
b = 0

#setting range of numbers for squares of each num
(1..100).each do |x|
  i = i + x**2
end

#setting range of numbers for square of sum of nums
(1..100).each do |x|
  n = n + x
  b = n**2
end

sum = b - i

puts "The difference between the two is #{sum}"
