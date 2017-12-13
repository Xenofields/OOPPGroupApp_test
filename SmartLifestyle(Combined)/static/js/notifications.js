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
  
// Reference notifications collection
var notificationsRef = firebase.database().ref('notifications');

//Listen for form submit
document.getElementById('notifications').addEventListener('submit',submitForm);

//Submit form
function submitForm(e){
  e.preventDefault();
  
  //Get values
  var haze=getOptionVal('haze');
  var security=getOptionVal('security');
  var device=getOptionVal('device');

  //Save notifications settings
  saveNotification(haze, security, device);

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
function getOptionVal(name){
  for (var i = 0; i < 3; i++){
    var notename = document.getElementsByName(name);
   if (notename[i].checked == true){
    return notename[i].value;
    break;
    }else{
      continue;
    }
  }
}

//Save profile to firebase
function saveNotification(haze, security, device){
  var newNotificationsRef=notificationsRef.push();
  newNotificationsRef.set({
    haze : haze,
    security : security,
    device : device
  })
}