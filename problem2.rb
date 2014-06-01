sum = 0
second = 0
i = 1

while i <= 4000000
  sum += i if (i % 2 == 0)
  i, second = second, second + i
end

puts sum