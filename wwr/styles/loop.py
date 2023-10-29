#number
number = int(input(f'Please type a positive number: '))

while number < 0: 
    print(f'Sorry, that is not a positive number. Please try again.')
    print()
    number = int(input(f'Please type a positive number: '))
print()
print(f'The number is: {number}')
print()
#Candy
candy = input(f'May I have a piece of candy? ')

while candy.lower() != "yes":
    print()
    candy = input(f'May I have a piece of candy? ')

print(f'Thank you.')