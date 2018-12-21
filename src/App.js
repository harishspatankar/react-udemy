import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      { name: 'Harish', age: 23 },
      { name: 'Aditya', age: 24 },
      { name: 'Abhishek', age: 26 }
    ],
    showPersons: false
  }

  switchNameHandler = (newName) => {
    this.setState({
      persons: [
        { name: newName, age: 23 },
        { name: 'Aditya Kane', age: 24 },
        { name: 'Aishwarya Joshi', age: 23 }
      ]
    })

  }

  nameChangeHandler = (event) => {
    this.setState({
      persons: [
        { name: 'Harish', age: 23 },
        { name: event.target.value, age: 24 },
        { name: 'Aishwarya', age: 23 }
      ]
    })
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({
      showPersons: !doesShow
    });
  }

  render() {
    const style = {
      backgroundColor: 'red',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px'
    }
    return (
      <div className="App">
        <h1>I am a react app</h1>
        <p>This is really working</p>
        <button
          style={style}
          onClick={this.togglePersonsHandler}>Toggle Persons</button>
        {this.state.showPersons === true ?
          <div>
            <Person
              name={this.state.persons[0].name}
              age={this.state.persons[0].age} />
            <Person
              name={this.state.persons[1].name}
              age={this.state.persons[1].age}
              click={this.switchNameHandler.bind(this, "Kane Maharaj")}
              changed={this.nameChangeHandler} />
            <Person
              name={this.state.persons[2].name}
              age={this.state.persons[2].age}>My Hobbies: I love singing</Person>
          </div> : null
        }
      </div>
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Hello'));
  }
}

export default App;
