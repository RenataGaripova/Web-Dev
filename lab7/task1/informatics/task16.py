n = input()
l = len(n)
s = 0
for i in range(l):
    s += (2 ** (l - i - 1) * int(n[i]))

print(s)