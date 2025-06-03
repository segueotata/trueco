import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore"; // falta importar

const firebaseConfig = {
	apiKey: "AIzaSyCNH7hWBOzuRATFTnu25Z28OC1PzYjleI8",
	authDomain: "trueco-001.firebaseapp.com",
	projectId: "trueco-001",
	storageBucket: "trueco-001.firebasestorage.app",
	messagingSenderId: "516773521113",
	appId: "1:516773521113:web:bab5fc71a357bed8b900c8",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app); // aqui exporta o Firestore
