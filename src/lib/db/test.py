import json
import random

with open('artwork_backup.json', 'r', encoding='utf-8') as file:
    data = json.load(file)

random.shuffle(data)

with open('artwork.json', 'w', encoding='utf-8') as file:
    json.dump(data, file, indent=4)
