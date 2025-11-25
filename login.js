  // Import Firebase
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.0/firebase-app.js";
  import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } 
    from "https://www.gstatic.com/firebasejs/10.7.0/firebase-auth.js";

  // Config Firebase (à récupérer dans ta console Firebase)
const firebaseConfig = {
  apiKey: "AIzaSyA6S2lmIUwKUFptBrJKftVyP_F6j-X2XGM",
  authDomain: "sign-up-vafm.firebaseapp.com",
  projectId: "sign-up-vafm",
  storageBucket: "sign-up-vafm.firebasestorage.app",
  messagingSenderId: "561614233020",
  appId: "1:561614233020:web:4a0c3658e343cb74271fb9"
};

  // Initialisation
  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);

  // Exemple inscription
  function register(email, password) {
    createUserWithEmailAndPassword(auth, email, password)
      .then(userCredential => {
        console.log("✅ Inscription réussie :", userCredential.user);
      })
      .catch(error => {
        console.error("❌ Erreur :", error.message);
      });
  }

  // Exemple connexion
  function login(email, password) {
    signInWithEmailAndPassword(auth, email, password)
      .then(userCredential => {
        console.log("✅ Connexion réussie :", userCredential.user);
      })
      .catch(error => {
        console.error("❌ Erreur :", error.message);
      });
  }
