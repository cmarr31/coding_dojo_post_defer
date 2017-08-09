class Animal(object):
    def __init__(self, name, health=100):
        self.name = name
        self.health = health
    def walk(self):
        self.health -= 1
        return self
    def run(self):
        self.health -= 5
        return self
    def displayHealth(self):
        print "Name: {} and Health: {}".format(self.name, self.health)
animal1 = Animal("JOE").walk().walk().walk().run().run().displayHealth()

class Dog(Animal):
    def __init__(self, name):
        super(Dog, self).__init__(name, 150)
    def pet(self):
        self.health += 5
        return self
dog1 = Dog("SHIBA").walk().walk().walk().run().run().pet().displayHealth()

class Dragon(Animal):
    def __init__(self, name):
        super(Dragon, self).__init__(name, 170)
    def fly(self):
        self.health -= 10
        return self
    def displayHealth(self):
        print "This is a dragon!"
        super(Dragon, self).displayHealth()
dragon1 = Dragon("VALERIA").walk().walk().walk().run().run().fly().fly().displayHealth()

animal2 = Animal("OTHER").walk().run().displayHealth()
#animal2.pet()
#animal2.fly()
#dog1.fly()