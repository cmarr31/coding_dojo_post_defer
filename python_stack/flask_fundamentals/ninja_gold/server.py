from flask import Flask, render_template, redirect, request, session

app = Flask(__name__)
app.secret_key = 'ninjagold'
ninjasgold = 0


@app.route('/')
def index():
	if ('gold' not in session):
		session['gold'] = 0
	else:
		session['gold'] +=1
	return render_template('index.html')

@app.route('/process_money')
def process_money():
	session_gold = form.session['gold']
	return redirect('/')







app.run(debug=True)