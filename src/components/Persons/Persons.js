import React, { Component } from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';

import Person from './Person/Person';

class Persons extends Component {
  static propTypes = {
    persons: PropTypes.objectOf(
      PropTypes.shape({
        age: PropTypes.number,
        name: PropTypes.string
      })
    ),
    clicked: PropTypes.func,
    changed: PropTypes.func
  };

  constructor(props) {
    super(props);
    this.lastPersonRef = React.createRef();
  }

  componentDidMount() {
    this.lastPersonRef.current.focus();
  }

  render() {
    let index = 0;
    return _.map(this.props.persons, person => {
      index++;
      return (
        <Person
          ref={this.lastPersonRef}
          index={index}
          key={person.id}
          id={person.id}
          name={person.name}
          age={person.age}
          clicked={() => this.props.clicked(person.id)}
          changed={event => this.props.changed(event, person.id)}
        >
          {person.about}
        </Person>
      );
    });
  }
}

export default Persons;
