import React, { Component } from 'react';
import './App.css';
import Header from './components/Header'
import Grid from './components/Grid'

// JSX allows us to insert any kind of JS (functions, variables etc)

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: [
        {
          id: 1,
          title: 'Add course notes for ML class',
          details: 'Submit How to use ensemble learning to improve predictions'
        },
        {
          id: 2,
          title: 'Setup Trello board',
          details: 'To track personal committments'
        },
        {
          id: 3,
          title: 'Submit Kaggle Zillow competition predictions',
          details: 'Scores generated by model'
        },
    ],
      name: 'Armen',
    }
  }

  render() {
    return (
      <div className="App">
        <Header name={this.state.name}/>
        <Grid notes = {this.state.notes}/>
      </div>

    );
  }
}

export default App;
