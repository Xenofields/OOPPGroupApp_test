(function(){

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
  
  // Get a reference to the database service
	var database = firebase.database();
	
}());