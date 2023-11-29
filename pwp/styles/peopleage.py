people = [
    "Stephanie 36",
    "John 29",
    "Emily 24",
    "Gretchen 54",
    "Noah 12",
    "Penelope 32",
    "Michael 2",
    "Jacob 10"
]
youngest_age = 1000
youngest_name = ""
oldest_age = 0
oldest_name = ""

print()
for person_line in people:
    parts = person_line.split() 
    name = parts[0]
    age = int(parts[1])
    if age < youngest_age:
        youngest_age = age
        youngest_name = name
print(f"The youngest person is: {youngest_name} with an age of {youngest_age}")
print()
for person_line in people:
    parts = person_line.split() 
    name2 = parts[0]
    age2 = int(parts[1])
    if age > oldest_age:
        oldest_age = age2
        oldest_name = name2
        print(f"The oldest person is: {oldest_name} with an age of {oldest_age}")
