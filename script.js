import { auth } from './firebase-config.js';
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword
} from "https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js";

// Email validator regex function
function validateEmail(email) {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
}

// Add user info row to the table (without action column)
function addUserToTable(email, password) {
  const tbody = document.getElementById('userTable').querySelector('tbody');
  const row = document.createElement('tr');
  row.innerHTML = `
    <td>${email}</td>
    <td>${password}</td>
  `;
  tbody.appendChild(row);
}

// Signup with validation
window.signupUser = () => {
  const email = document.getElementById("signup-email").value.trim();
  const password = document.getElementById("signup-password").value;

  if (!validateEmail(email)) {
    alert("Please enter a valid email address.");
    return;
  }

  if (password.length < 6) {
    alert("Password should be at least 6 characters.");
    return;
  }

  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      alert("Signup successful!");
      addUserToTable(email, password);
      console.log(userCredential.user);
    })
    .catch((error) => {
      alert("Signup failed: " + error.message);
      console.error(error);
    });
};

// Login with validation
window.loginUser = () => {
  const email = document.getElementById("login-email").value.trim();
  const password = document.getElementById("login-password").value;

  if (!validateEmail(email)) {
    alert("Please enter a valid email address.");
    return;
  }

  if (password.length < 6) {
    alert("Password should be at least 6 characters.");
    return;
  }

  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      alert("Login successful!");
      addUserToTable(email, password);
      console.log(userCredential.user);
    })
    .catch((error) => {
      alert("Login failed: " + error.message);
      console.error(error);
    });
};
