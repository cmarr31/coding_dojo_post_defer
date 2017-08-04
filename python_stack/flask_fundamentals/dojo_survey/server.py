from flask import Flask, render_template, redirect, request, session

app = Flask(__name__)
app.secret_key = 'asdfasdfasdf'

@app.route('/')
def index():
	return render_template('index.html')

@app.route('/result', methods=["POST"])
def result():
	
	session['name'] = request.form['name']
	session['location'] = request.form['location']
	session['language'] = request.form['language']
	session['comment'] = request.form['comment']
	if len(session['name']) < 1:
		return redirect('/')
	else:
		return render_template('result.html')
app.run(debug=True)
