(function(){


// Initialize Firebase
  const config = {
    apiKey: "AIzaSyB4sBU2x4k9W5RuNfuuNUMcSyh94t9HT4I",
    authDomain: "login-page-c70ab.firebaseapp.com",
    databaseURL: "https://login-page-c70ab.firebaseio.com",
    projectId: "login-page-c70ab",
    storageBucket: "login-page-c70ab.appspot.com",
    messagingSenderId: "46349091083"
  };
  firebase.initializeApp(config);

  // Get Elements
    const txtEmail = document.getElementById("txtEmail");
    const txtPassword = document.getElementById('txtPassword');
    const btnSignUp = document.getElementById('btnSignUp');
    const btnLogin = document.getElementById('btnLogin');
    const btnLogout = document.getElementById('btnLogout');


	//Add login event


	//Add signup event
	btnSignUp.addEventListener('click', e=> {
		//Get email and pass
		const email = txtEmail.value;
		const pass = txtPassword.value;
		const auth = firebase.auth();
		// Sign in
		const promise = auth.createUserWithEmailAndPassword(email, pass);
		promise
			.catch(e => console.log(e.message));
	});

	// Add a realtime listener
	firebase.auth().onAuthStateChanged(firebaseUser =>{
		if (firebaseUser){
			console.log(firebaseUser);
			btnLogout.classList.remove('hide');
		} else{
			console.log('not logged in');
			btnLogout.classList.add('hide');
		}
	});

}());
