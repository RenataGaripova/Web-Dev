n = int(input())
lst = list(map(int, input().split()))
print(*[lst[i] for i in range(0, n, 2)])