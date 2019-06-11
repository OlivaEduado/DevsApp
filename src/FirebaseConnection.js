import firebase from 'firebase';

let config = {
	
		apiKey: "AIzaSyDHCJMKkM8cO5OITEDMHt8tthNxaiNPHCU",
    	authDomain: "projeto-edu-ev0904.firebaseapp.com",
    	databaseURL: "https://projeto-edu-ev0904.firebaseio.com",
    	projectId: "projeto-edu-ev0904",
    	storageBucket: "projeto-edu-ev0904.appspot.com",
    	messagingSenderId: "1041012806948"
  		};
  	
  	  	firebase.initializeApp(config);

export default firebase;