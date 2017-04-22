import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import * as firebase from 'firebase';

class App extends Component {

  // Initial Data
  constructor() {
    super();
    this.state = {
      // Whatever is inside this is the state
      speed: 10
    }
  }

  // Data from database
  componentDidMount() {
      const rootRef = firebase.database().ref().child('react');
      const speedRef = rootRef.child('speed');
      
      // On method allows us to do the synchronization
      speedRef.on('value', snap => {
        this.setState({
          speed: snap.val() + "hi"
        })
      });
  }
    
  
  render() {
    return (
      //  <link href="https://fonts.googleapis.com/css?family=Open+Sans" rel="stylesheet"> 
      <div className="App">
        <h1>{this.state.speed}</h1>
        <div>
          Icons made by 
          <a href="http://www.freepik.com" title="Freepik">Freepik</a> 
          from <a href="http://www.flaticon.com" title="Flaticon">www.flaticon.com</a> is licensed by 
          <a href="http://creativecommons.org/licenses/by/3.0/" title="Creative Commons BY 3.0" target="_blank">CC 3.0 BY</a>
        </div>
      </div>
    );
  }
}

export default App;
