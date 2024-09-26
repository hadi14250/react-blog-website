import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { initializeApp } from "firebase/app";

// these are public ID's
const firebaseConfig = {
  apiKey: "AIzaSyCbcZFlyaxk9HreOUPi8SOQun7CfgV9W-4",
  authDomain: "my-react-blog-38120.firebaseapp.com",
  projectId: "my-react-blog-38120",
  storageBucket: "my-react-blog-38120.appspot.com",
  messagingSenderId: "486251384670",
  appId: "1:486251384670:web:e3afe6fcec7f983f6709cf"
};

const app = initializeApp(firebaseConfig);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
