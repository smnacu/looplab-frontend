// Firebase configuration
// TODO: Reemplazar con tus credenciales reales de Firebase
// 1. Ir a https://console.firebase.google.com
// 2. Crear proyecto "LoopLab"
// 3. Agregar app web
// 4. Copiar las credenciales acá

export const firebaseConfig = {
  apiKey: "TU_API_KEY",
  authDomain: "looplab.firebaseapp.com",
  projectId: "looplab",
  storageBucket: "looplab.appspot.com",
  messagingSenderId: "123456789",
  appId: "1:123456789:web:abcdef123456",
};

// Por ahora usamos Formspree como alternativa más simple
// 1. Ir a https://formspree.io
// 2. Crear cuenta gratis
// 3. Crear formulario
// 4. Reemplazar el endpoint abajo

export const FORMSPREE_ENDPOINT = "https://formspree.io/f/mjgdqobo";
