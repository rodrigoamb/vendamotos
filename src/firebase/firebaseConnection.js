import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
	apiKey: "AIzaSyAlai-Mfbv8gnF9kLHi9lN7pehR7j90qic",
	authDomain: "motos-32cea.firebaseapp.com",
	projectId: "motos-32cea",
	storageBucket: "motos-32cea.appspot.com",
	messagingSenderId: "65884404177",
	appId: "1:65884404177:web:61c107103283138de8c8f0",
};

const firebaseApp = initializeApp(firebaseConfig);

const auth = getAuth(firebaseApp);

export { auth };

