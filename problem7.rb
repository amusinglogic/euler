i = []
timer_start = Time.now
def prime?(num)
  a = Math.sqrt(num)
  (2..a).each { |y| return false if num % y == 0}
end

(2..1000000).each do |x|
  if prime?(x)
    i << x
  end
end

puts i[10000]
puts "Elapsed Time: #{(Time.now - timer_start)*1000} milliseconds"