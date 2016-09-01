start = 100
end = 999
winners = []

for i in range(100, 999):
    for j in range(100, 999):
        temp = (i * j)
        if str(temp) == str(temp)[::-1]:
            winners.append(temp)
winners.sort()
print winners[-1]

