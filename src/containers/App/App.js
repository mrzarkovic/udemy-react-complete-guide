import React, { Component, Fragment } from 'react';
import _ from 'lodash';

import classes from './App.css';

import withClass from '../../hoc/withClass';

import Persons from '../../components/Persons/Persons';
import Cockpit from '../../components/Cockpit/Cockpit';

export const AuthContext = React.createContext(false);

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
    showPersons: false,
    authenticated: false
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
    const persons = this.state.persons;
    this.setState({
      persons: _.omit(persons, id)
    });
  };

  togglePersonsHandler = () => {
    const isShown = this.state.showPersons;
    this.setState({
      showPersons: !isShown
    });
  };

  loginHandler = () => {
    this.setState({
      authenticated: true
    });
  };

  render() {
    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <Persons
          clicked={this.deletePersonHandler}
          changed={this.nameChangedHandler}
          persons={this.state.persons}
        />
      );
    }

    return (
      <Fragment>
        <Cockpit
          login={this.loginHandler}
          appTitle={this.props.title}
          showPersons={this.state.showPersons}
          persons={this.state.persons}
          toggle={this.togglePersonsHandler}
        />
        <AuthContext.Provider value={this.state.authenticated}>
          {persons}
        </AuthContext.Provider>
      </Fragment>
    );
  }
}

export default withClass(App, classes.App);
