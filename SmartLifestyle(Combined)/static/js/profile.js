// Initialize Firebase
var config = {
  apiKey: "AIzaSyB4sBU2x4k9W5RuNfuuNUMcSyh94t9HT4I",
  authDomain: "login-page-c70ab.firebaseapp.com",
  databaseURL: "https://login-page-c70ab.firebaseio.com",
  projectId: "login-page-c70ab",
  storageBucket: "login-page-c70ab.appspot.com",
  messagingSenderId: "46349091083"
  };
firebase.initializeApp(config);

// Reference message collection
var profileRef = firebase.database().ref('profile');

//Listen for form submit
document.getElementById('profileForm').addEventListener('submit',submitForm);

//Submit form
function submitForm(e){
  e.preventDefault();

  //Get values
  var username=getInputVal('username');
  var password=getInputVal('password');
  var email=getInputVal('email');
  var mobileno=getInputVal('mobileno');
  var streetname=getInputVal('streetname');
  var unitno=getInputVal('unitno');
  var postalcode=getInputVal('postalcode');
  
  //Save message
  saveProfile(username, password, email, mobileno, streetname, unitno, postalcode);

  //Back to top
  document.documentElement.scrollTop = 0;

  //Show alert
  document.querySelector('.alert').style.display = 'block';

  // Hide alert after 3 seconds
  setTimeout(function(){
    document.querySelector('.alert').style.display = 'none';
  },3000);

}

//Function to get form values
function getInputVal(id){
  return document.getElementById(id).value;
}

//Save message to firebase
function saveProfile(username, password, email, mobileno, streetname, unitno, postalcode){
  var newProfileRef=profileRef.push();
  newProfileRef.set({
    username : username,
    password : password,
    email : email,
    mobileno : mobileno,
    streetname : streetname,
    unitno : unitno,
    postalcode : postalcode
  })
}

//Validation of phone number
var phonenum=document.getElementById('mobileno');
phonenum.oninvalid = function(event) {
  event.target.setCustomValidity('Enter a valid phone number!');
}
//Validation of postal code
var pscode=document.getElementById('postalcode');
pscode.oninvalid = function(event) {
  event.target.setCustomValidity('Enter a valid postal code!');
}