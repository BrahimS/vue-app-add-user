import {initializeApp} from 'firebase';

const myapp=initializeApp({
	apiKey: "AIzaSyBfj-x0qc7sfihGkiEDCeBm69y_0-Edtsw",
	authDomain: "vue-vfire-project.firebaseapp.com",
	databaseURL: "https://vue-vfire-project.firebaseio.com",
	projectId: "vue-vfire-project",
	storageBucket: "vue-vfire-project.appspot.com",
	messagingSenderId: "10473019536",
	appId: "1:10473019536:web:c4bca438a833ba1e686015"
});

export const db=myapp.database();
export const namesRef=db.ref('name');

