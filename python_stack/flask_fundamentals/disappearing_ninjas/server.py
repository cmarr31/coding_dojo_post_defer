from flask import Flask, render_template, redirect, request, session

app = Flask(__name__)
app.secret_key = 'asdf'

@app.route('/')
def index():
	return render_template('index.html', are_they_here="No ninjas here.")


@app.route('/ninjas')
def ninjas():
	return render_template('ninjas.html')

@app.route('/ninjas/orange')
def orange():
	return render_template('orange.html')

@app.route('/ninjas/red')
def red():
	return render_template('red.html')

@app.route('/ninjas/purple')
def purple():
	return render_template('purple.html')

@app.route('/ninjas/blue')
def blue():
	return render_template('blue.html')


app.run(debug=True)