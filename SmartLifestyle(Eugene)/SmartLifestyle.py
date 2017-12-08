from flask import Flask, render_template, request
from wtforms import Form, StringField, TextAreaField, RadioField, SelectField

app = Flask(__name__)

@app.route('/home')
def homePage():
    return render_template('HomePage.html')

@app.route('/application')
def appPage():
    return render_template('AppPage.html')

@app.route('/utility')
def utilityPage():
    return render_template('UtilityPage.html')

if __name__ == '__main__':
    app.run(debug=True)


