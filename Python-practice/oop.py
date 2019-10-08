#################
## EXAMPLE: simple Coordinate class
#################

class Coordinate(object):

    def __init__(self, x, y):
        self.x = x
        self.y = y
    def position(self, other):
        distance = (self.x * self.y) - (other.x * other.y)
        return distance
c = Coordinate(3, 4)
b = Coordinate(2,1)

print(c.position(b))