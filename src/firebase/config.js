import { initializeApp } from "firebase/app";


const firebaseConfig = {
  apiKey: "AIzaSyDB_H5drgKFD7IfPjVpqJepBXKRRM44q5s",
  authDomain: "sportnike-eb926.firebaseapp.com",
  projectId: "sportnike-eb926",
  storageBucket: "sportnike-eb926.appspot.com",
  messagingSenderId: "266184739106",
  appId: "1:266184739106:web:67a41407832d2b9f6dbd7b",
  measurementId: "G-ZGY43VVZ1Y",
};

const app = initializeApp(firebaseConfig);

export default function getFirestoreApp() {
  return app;
}

