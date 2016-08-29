maxnumber = 600851475143
target = maxnumber
i = 2
while i < target:
	while target % i == 0:
		target = target / i
	i=i+1
print target