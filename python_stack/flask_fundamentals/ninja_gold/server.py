from flask import Flask, render_template, redirect, request, session

app = Flask(__name__)
app.secret_key = 'ninjagold'


@app.route('/')
def index():
	if 'gold' is not in session:
		session['gold'] = 0
	else:
		session['gold'] +=1
	return render_template('index.html')

@app.route('/process_money')
def process_money():
	session_gold = form.session['gold']
	return redirect('/')







app.run(debug=True)