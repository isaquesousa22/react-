// firebase.js
import { initializeApp } from 'firebase/app';
import { getDatabase } from 'firebase/database';

const firebaseConfig = {
  apiKey: "AIzaSyB0JFqZYJ8Eyj8bwd5KTqUd13HpZd1Lx2k",
  authDomain:"tcc-c7c8d.firebaseapp.com",
  databaseURL: "https://tcc-c7c8d-default-rtdb.firebaseio.com",
  projectId: "tcc-c7c8d",
  storageBucket: "tcc-c7c8d.firebasestorage.app",
  messagingSenderId: "3374323265",
  appId: "1:3374323265:web:8be468ac71c08ed9e618c0",
};

const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

export { db };
