import React, { Component } from 'react';
import Header from './components/Header';
import Grid from './components/Grid';
import Form from './components/Form';
import firebase from 'firebase';
import _ from 'lodash';

// JSX allows us to insert any kind of JS (functions, variables etc)

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: [],
      name: 'Armen',
      currentTitle: '',
      currentDetails: '',
    }
  }

  componentWillMount(){
    firebase.initializeApp({
        apiKey: "AIzaSyC1aJZRLKua0FCZ59Exfn3JWOQKKcFcwLQ",
        authDomain: "notepad-dc787.firebaseapp.com",
        databaseURL: "https://notepad-dc787.firebaseio.com",
        projectId: "notepad-dc787",
        storageBucket: "",
        messagingSenderId: "666996638053"
    });
    firebase.database().ref('/notes')
      .on('value', snapshot => {
        const fbstore = snapshot.val();

        const store = _.map(fbstore, (value, id) => {
          return {
            id: id,
            title: value.title,
            details: value.details,
          };
        });
        this.setState({
          notes: store, 
        })
      });
  }

  handleChange(event){
    const name = event.target.name;
    const value = event.target.value;

    this.setState({
      [name]: value
    });
  }

  handleSubmit(event){
    alert(`Your note ${this.state.currentTitle} has been added successfully`);
    event.preventDefault();
  }

  render() {
    return (
      <div className="App">
        <Header name={this.state.name}/>
        <Form 
          currentTitle = {this.state.currentTitle}
          currentDetails = {this.state.currentDetails}
          handleChange={this.state.handleChange}
          handleSubmit={this.state.handleSubmit}
          />
        <Grid notes = {this.state.notes}/>
      </div>

    );
  }
}

export default App;
