result = []

for i in range(1, 7):
    f = open('level_{}.txt'.format(i), "r")
    new_words = f.readlines()
    for word in new_words:
        if word not in result and len(word) > 0:
            result.append(word)
f = open('another.txt'.format(i), "r")
new_words = f.readlines()
for word in new_words:
    if word not in result and len(word) > 0:
        result.append(word)
print(len(result))
with open('all.txt', "a") as f:
    f.writelines(result)