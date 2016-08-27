first = 0
second = 1
i = 0
sum = 0
while i < 4000000:
	i = first + second
	first = second
	second = i
	if i % 2 == 0:
		sum += i
print sum
