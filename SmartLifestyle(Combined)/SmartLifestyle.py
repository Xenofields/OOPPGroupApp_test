from flask import Flask, render_template, request
from wtforms import Form, StringField, RadioField, SelectField,PasswordField,\
    SubmitField, validators, ValidationError


app = Flask(__name__)

#Eugene's page
@app.route('/home')
def homePage():
    return render_template('HomePage.html')

@app.route('/application')
def appPage():
    return render_template('AppPage.html')

@app.route('/utility')
def utilityPage():
    return render_template('UtilityPage.html')

class test(Form):
    username=StringField("Username:",[validators.DataRequired("Please enter a username!")],default="User")
    password=PasswordField("Password:")
    email=StringField("E-mail:",[validators.Email('Please enter your email address!'),
                                 validators.DataRequired("Please enter your email address!")])
    mobileno=StringField('Mobile Number:',[validators.DataRequired("Please enter a valid mobile number!")])
    streetname=StringField('Street Name:',[validators.DataRequired("Please enter your street name!")])
    unitno=StringField('Unit Number:',[validators.DataRequired("Please enter your unit number!")])
    postalcode=StringField('Postal Code:',[validators.DataRequired("Please enter your postal code!")])
    savechanges=SubmitField('Save Changes')

@app.route('/test', methods = ['GET', 'POST'])
def contact():
    form = test(request.form)
    return render_template('test.html', form = form)

class profile(Form):
    username = StringField("Username:", [validators.DataRequired("Please enter a username!")], default="User")
    password = PasswordField("Password:", default="PASSWORD")
    email = StringField("E-mail:", [validators.Email('Please enter your email address!'),
                                    validators.DataRequired("Please enter your email address!")])
    mobileno = StringField('Mobile Number:', [validators.DataRequired("Please enter a valid mobile number!")])
    streetname = StringField('Street Name:', [validators.DataRequired("Please enter your street name!")])
    unitno = StringField('Unit Number:', [validators.DataRequired("Please enter your unit number!")])
    postalcode = StringField('Postal Code:', [validators.DataRequired("Please enter your postal code!")])

@app.route('/myprofile', methods = ['GET', 'POST'])
def profilePage():
    form = profile(request.form)
    return render_template('Profilepage.html', form = form)

@app.route('/notifications')
def notePage():
    return render_template('Notepage.html')

@app.route('/household_chores')
def choresPage():
    return render_template('Chores.html')

@app.route('/change_password')
def changePass():
    return render_template('ChangePass.html')

#Seong Il's page
@app.route('/haze')
def hazepage():
    return render_template('layout.html')

@app.route('/email.html')
def email():
    return render_template('email.html')

@app.route('/SMS.html')
def SMS():
    return render_template('SMS.html')

@app.route('/SMSandemail.html')
def SMSandemail():
    return render_template('SMSandemail.html')

@app.route('/green.html')
def green():
    return render_template('green.html')
#Samuel's Page
@app.route('/signup')
def signupPage():
    return render_template('SignUpPage.html')

@app.route('/securityfunction')
def securityPage():
    return render_template('Security Functions.html')

@app.route('/loginpage')
def loginPage():
    return render_template('LoginPage.html')

#Bo Zhao's page
@app.route('/family')
def familyPage():
    return render_template('OOPP1.html')


if __name__ == '__main__':
    app.run(debug=True)

