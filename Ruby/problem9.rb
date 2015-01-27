#! /usr/bin/ruby

#A Pythagorean triplet is a set of three natural numbers, a < b < c, for which,
#
#a2 + b2 = c2
#For example, 32 + 42 = 9 + 16 = 25 = 52.
#
#There exists exactly one Pythagorean triplet for which a + b + c = 1000.
#Find the product abc.


timer_start = Time.now

1.upto(1000) do |c|
  1.upto(c) do |b|
    1.upto(b) do |a|
      if a * a + b * b == c * c
        if a + b + c == 1000
          puts "(#{a},#{b},#{c})" 
          answer = a * b * c
          puts answer
        end
      end
    end
  end
end


puts "Elapsed Time: #{(Time.now - timer_start)*1000} milliseconds"
