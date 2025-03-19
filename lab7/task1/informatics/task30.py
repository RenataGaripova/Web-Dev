def Min(a, b, c, d):
    t = [a, b, c, d]
    t.sort()
    return t[0]

a, b, c, d = map(int, input().split())
print(Min(a, b, c, d))

def Power(a, b):
    return a ** b
c, d = map(float, input().split())
print(Power(c, d))

def Xor(a, b):
    return int(a != b)

c, d = map(float, input().split())
print(Xor(c, d))