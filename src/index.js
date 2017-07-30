import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import 'framework7/dist/css/framework7.ios.min.css';
import 'framework7/dist/css/framework7.ios.colors.min.css';

import 'framework7/dist/css/framework7.material.min.css'
import 'framework7/dist/css/framework7.material.colors.min.css'

// import './index.css';
import * as firebase from 'firebase';

var config = {
    apiKey: "AIzaSyC9W8lcMnbJJ5ofLxFu4oCiMLTJaQx5Hpw",
    authDomain: "wpilostfound.firebaseapp.com",
    databaseURL: "https://wpilostfound.firebaseio.com",
    storageBucket: "wpilostfound.appspot.com",
    messagingSenderId: "22724037897"
  };
  
firebase.initializeApp(config);

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
