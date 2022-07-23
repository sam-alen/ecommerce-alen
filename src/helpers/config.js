// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDPpTHoZexzgkZqmcUKmBz0hRrZa0lVEXg",
  authDomain: "ecommerce-alen.firebaseapp.com",
  projectId: "ecommerce-alen",
  storageBucket: "ecommerce-alen.appspot.com",
  messagingSenderId: "845146351879",
  appId: "1:845146351879:web:7c256ec0ee980f692a7da2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

//funcion para exportar la app
export default function iniFirebase(){
  return app
}