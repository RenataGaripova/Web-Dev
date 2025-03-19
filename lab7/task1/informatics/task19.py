n = int(input())
f = 0
d = 2

while d * d <= n:
    if n % d == 0:
        print(d)
        f = 1
        break
    d += 1

if not f:
    print(n)