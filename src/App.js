import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      { name: 'Harish', age: 23 },
      { name: 'Aditya', age: 24 },
      { name: 'Abhishek', age: 26 }
    ]
  }
  render() {
    return (
      <div className="App">
        <h1>I am a react app</h1>
        <p>This is really working</p>
        <Person name={this.state.persons[0].name} age={this.state.persons[0].age} />
        <Person name={this.state.persons[1].name} age={this.state.persons[1].age} />
        <Person name={this.state.persons[2].name} age={this.state.persons[2].age}>My Hobbies: I love singing</Person>
      </div>
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Hello'));
  }
}

export default App;
