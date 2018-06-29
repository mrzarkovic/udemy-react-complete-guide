import React, { Component } from 'react';
import _ from 'lodash';

import './App.css';

import Person from './Person/Person';

const persons = {
  1: {
    id: 1,
    name: 'Milos',
    age: 26,
    about: 'Svetski mega car'
  },
  2: {
    id: 2,
    name: 'Max',
    age: 28
  },
  3: {
    id: 3,
    name: 'Manu',
    age: 29
  }
};

class App extends Component {
  state = {
    persons,
    showPersons: false
  };

  nameChangedHandler = ({ target: { value: newName } }, id) => {
    const { persons } = this.state;
    const newPersons = { ...persons };

    newPersons[id].name = newName;

    this.setState({
      persons: newPersons
    });
  };

  deletePersonHandler = id => {
    this.setState({
      persons: _.omit(this.state.persons, id)
    });
  };

  togglePersonsHandler = () => {
    this.setState({
      showPersons: !this.state.showPersons
    });
  };

  renderPersons = () => {
    return _.map(this.state.persons, person => {
      return (
        <Person
          id={person.id}
          key={person.id}
          name={person.name}
          age={person.age}
          click={this.deletePersonHandler.bind(this, person.id)}
          changed={this.nameChangedHandler}
        >
          {person.about}
        </Person>
      );
    });
  };

  render() {
    let persons = null;
    if (this.state.showPersons) {
      persons = this.renderPersons();
    }

    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <button onClick={this.togglePersonsHandler}>Switch Name</button>
        {persons}
      </div>
    );
  }
}

export default App;
