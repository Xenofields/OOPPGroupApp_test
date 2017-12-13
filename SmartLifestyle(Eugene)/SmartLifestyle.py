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
@app.route('/myprofile')
def profilePage():
    return render_template('Profilepage.html')
@app.route('/notifications')
def notePage():
    return render_template('Notepage.html')
@app.route('/household_chores')
def choresPage():
    return render_template('Chores.html')
@app.route('/change_password')
def changePass():
    return render_template('ChangePass.html')
if __name__ == '__main__':
    app.run(debug=True)


