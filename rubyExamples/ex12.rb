# EXERCISE 12: Prompting people for Numbers

#biggest differnece is the use of "to_i", converts the input into an interger 

print "Give me a number: "
number = gets.chomp.to_i

bigger = number * 100
puts "A bigger number is #{bigger}."

print "Give me another number: "
another = gets.chomp
number = another.to_i

smaller = number / 100
puts "A smaller number is #{smaller}."