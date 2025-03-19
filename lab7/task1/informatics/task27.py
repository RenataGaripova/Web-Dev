n = int(input())
lst = list(map(int, input().split()))
k = 0
for i in range(1, n - 1):
    if (lst[i - 1] < lst[i] and lst[i + 1] < lst[i]):
        k += 1
print(k)