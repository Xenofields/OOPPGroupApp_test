from flask import Flask, render_template, request

app = Flask(__name__)


@app.route('/haze')
def homepage():
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


if __name__ == '__main__':
    app.run()
