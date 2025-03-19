n = int(input())
lst = list(map(int, input().split()))
flag = 0
for i in range(1, n):
    if (lst[i] > 0 and lst[i - 1] > 0) or (lst[i] < 0 and lst[i - 1] < 0):
        print("YES")
        flag = 1
        break
if not flag:
    print("NO")