import React, { Component } from 'react';
import _ from 'lodash';

import classes from './App.css';

import Person from './Person/Person';
import ErrorBoundary from './ErrorBoundary/ErrorBoundary';

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
        <ErrorBoundary key={person.id}>
          <Person
            id={person.id}
            name={person.name}
            age={person.age}
            click={this.deletePersonHandler.bind(this, person.id)}
            changed={this.nameChangedHandler}
          >
            {person.about}
          </Person>
        </ErrorBoundary>
      );
    });
  };

  render() {
    let persons = null;
    let btnClass = '';

    if (this.state.showPersons) {
      persons = this.renderPersons();
      btnClass = classes.Red;
    }

    const assignedClasses = [];
    if (_.size(this.state.persons) < 2) {
      assignedClasses.push(classes.red);
    }
    if (_.size(this.state.persons) < 1) {
      assignedClasses.push(classes.bold);
    }

    return (
      <div className={classes.App}>
        <h1>Hi, I'm a React App</h1>
        <p className={assignedClasses.join(' ')}>This is really working!</p>
        <button className={btnClass} onClick={this.togglePersonsHandler}>
          Show Persons
        </button>
        {persons}
      </div>
    );
  }
}

export default App;
