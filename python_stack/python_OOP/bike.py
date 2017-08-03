class Bike(object):
	"""docstring for Bike"""
	def __init__(self, price, miles):
		self.price = price
		self.max_speed = 0
		self.miles = miles

	def displayInfo(self):
		print self.price
		print self.max_speed
		print self.miles

	def ride(self):
		print "Riding"
		self.miles +=10
		return self.miles

	def reverse(self):
		print "Reversing"
		self.miles -=5
		return self.miles

bike1 = Bike(100, 15)
bike2 = Bike(125, 25)
bike3 = Bike(150, 35)

bike1.ride()
bike2.displayInfo()
bike3.reverse()

		