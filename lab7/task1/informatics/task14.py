x = input()
a = ''
for i in x[::-1]:
    if (i == '0' and a != '') or i != '0':
        a+=i
print(a)