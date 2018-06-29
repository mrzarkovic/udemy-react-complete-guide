import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';

import withClass from '../../../hoc/withClass';

import { AuthContext } from '../../../containers/App/App';

import classes from './Person.css';

class Person extends Component {
  static propTypes = {
    index: PropTypes.number,
    id: PropTypes.number,
    clicked: PropTypes.func,
    name: PropTypes.string.isRequired,
    age: PropTypes.number.isRequired,
    changed: PropTypes.func
  };

  inputElement = React.createRef();

  shouldComponentUpdate(nextProps, nextState) {
    return nextProps.name !== this.props.name;
  }

  componentDidMount() {
    if (this.props.index === 1) {
      this.inputElement.current.focus();
    }
  }

  focus() {
    this.inputElement.current.focus();
  }

  render() {
    return (
      <Fragment>
        <AuthContext.Consumer>
          {auth => auth && <p>I'm authenticated</p>}
        </AuthContext.Consumer>
        <p onClick={this.props.clicked}>
          I am <b>{this.props.name}</b> and I am {this.props.age} years old.
        </p>
        <p>{this.props.children}</p>
        <input
          ref={this.inputElement}
          type="text"
          value={this.props.name}
          onChange={this.props.changed}
        />
      </Fragment>
    );
  }
}

export default withClass(Person, classes.Person);
