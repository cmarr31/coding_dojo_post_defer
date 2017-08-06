from flask import Flask, render_template, redirect, request, session, random

app = Flask(__name__)
app.secret_key = 'theonekeytorulethemall'


@app.route('/')
def index():
	return render_template('index.html')



app.run(debug=True)