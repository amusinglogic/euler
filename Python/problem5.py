#Decided to write out the gcd formula instead of import
def gcd(a,b):
    while b != 0:
        a, b = b, a%b
    return a

#LCM is found by dividing the product by the gcd
def lcm(a,b):
    return a*b//gcd(a,b)

#Reducing using LCM with the range of 1-20 as the values
print reduce(lcm, range(1,20+1))
