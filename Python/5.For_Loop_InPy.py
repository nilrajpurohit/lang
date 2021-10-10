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

for i in range(4):  # in this i is start up with 0 stage.
    square()
