from flask import Flask, render_template, request

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

if __name__ == '__main__':
    app.run(debug=True)

