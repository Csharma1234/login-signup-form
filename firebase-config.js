import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-analytics.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyBnAUoxtHVTQpr2XmNiWax1KV3og9-_Nes",
  authDomain: "login-signup-form-ba02d.firebaseapp.com",
  projectId: "login-signup-form-ba02d",
  storageBucket: "login-signup-form-ba02d.appspot.com",
  messagingSenderId: "154267945233",
  appId: "1:154267945233:web:ded6b6968442b864fc64b0",
  measurementId: "G-S0NPL7N9LR"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);

export { auth };
