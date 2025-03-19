n = int(input())
lst = list(map(int, input().split()))

print(len([lst[i] for i in range(1, n) if lst[i] > lst[i - 1]]))