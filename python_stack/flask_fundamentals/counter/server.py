from flask import Flask, render_template, redirect, request, session

app = Flask(__name__)
app.secret_key = 'supersecretkey'


@app.route('/')
def index():
    if 'count' in session.keys():
        session['count'] += 1
    else:
        session['count'] = 1
    return render_template("index.html")

app.run(debug=True)


