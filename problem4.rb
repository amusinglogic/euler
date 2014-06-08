first = 100
last = 999

palindrome = (first..last).map do |i|
  (i..last).map do |j|
    i * j
  end.select{ |n| n.to_s == n.to_s.reverse}
end.flatten.max

puts palindrome
  