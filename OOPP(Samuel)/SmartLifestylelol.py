from flask import Flask, render_template, request
from wtforms import Form, StringField, TextAreaField, RadioField, SelectField

app = Flask(__name__)

@app.route('/signup')
def homePage():
    return render_template('SignUpPage.html')

@app.route('/securityfunc')
def appPage():
    return render_template('Security Functions.html')

@app.route('/loginpage')
def utilityPage():
    return render_template('LoginPage.html')

if __name__ == '__main__':
    app.run(debug=True)