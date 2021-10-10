import turtle
nil=turtle.Turtle()
nil.speed(2)

def square():
    nil.forward(100)
    nil.right(90)
    nil.forward(100)
    nil.right(90)
    nil.forward(100)
    nil.right(90)
    nil.forward(100)
     
i=1

while i != 5:
    square()
    i=i+1