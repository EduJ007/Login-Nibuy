import { initializeApp } from "https://www.gstatic.com/firebasejs/12.1.0/firebase-app.js";
import { getAuth, signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/12.1.0/firebase-auth.js";

// 🔥 Config Firebase
const firebaseConfig = {
  apiKey: "AIzaSyAvptwKov2oOd8Lme55u0i7DkfS97TNlC8",
  authDomain: "nibuy-a3356.firebaseapp.com",
  projectId: "nibuy-a3356",
  storageBucket: "nibuy-a3356.appspot.com",
  messagingSenderId: "120124150876",
  appId: "1:120124150876:web:d1122c1c36f26e47548299",
  measurementId: "G-R8V8B077T3"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// 🔑 Login com email/senha
document.getElementById("login-btn").addEventListener("click", async () => {
  const email = document.getElementById("email").value;
  const senha = document.getElementById("senha").value;
  const erroEl = document.getElementById("erro");

  try {
    await signInWithEmailAndPassword(auth, email, senha);
    window.location.href = "customizacao.html"; // redireciona
  } catch (error) {
    erroEl.textContent = "⚠️ Email ou senha incorretos.";
  }
});

// 🔑 Login com Google
document.getElementById("google-login").addEventListener("click", async () => {
  const provider = new GoogleAuthProvider();
  try {
    await signInWithPopup(auth, provider);
    window.location.href = "customizacao.html";
  } catch (error) {
    alert("Erro ao entrar com Google");
  }
});

// 📌 Popup de cadastro
const popup = document.getElementById("popupCadastro");
document.getElementById("abrirCadastro").addEventListener("click", () => {
  popup.style.display = "flex";
});

document.getElementById("fecharPopup").addEventListener("click", () => {
  popup.style.display = "none";
});

// Criar conta
document.getElementById("cad-btn").addEventListener("click", async () => {
  const email = document.getElementById("cad-email").value;
  const senha = document.getElementById("cad-senha").value;
  const erroCadEl = document.getElementById("cad-erro");

  try {
    await createUserWithEmailAndPassword(auth, email, senha);
    window.location.href = "customizacao.html";
  } catch (error) {
    erroCadEl.textContent = "⚠️ Erro ao criar conta: " + error.message;
  }
});
