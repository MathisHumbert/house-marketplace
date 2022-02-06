import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyDUozIKdB_i7b08TnxdDd2M7stEJcfwm2U',
  authDomain: 'house-marketplace-app-fcc73.firebaseapp.com',
  projectId: 'house-marketplace-app-fcc73',
  storageBucket: 'house-marketplace-app-fcc73.appspot.com',
  messagingSenderId: '869122944739',
  appId: '1:869122944739:web:a9a5da2f18a3569870dfd6',
};

// Initialize Firebase
initializeApp(firebaseConfig);
export const db = getFirestore();
