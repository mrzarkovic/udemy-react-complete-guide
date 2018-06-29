import React, { Fragment } from 'react';
import _ from 'lodash';

import classes from './Cockpit.css';

const cockpit = props => {
  const assignedClasses = [];
  let btnClass = classes.Button;
  if (_.size(props.persons) < 2) {
    assignedClasses.push(classes.red);
  }
  if (_.size(props.persons) < 1) {
    assignedClasses.push(classes.bold);
  }

  if (props.showPersons) {
    btnClass = [classes.Button, classes.Red].join(' ');
  }

  return (
    <Fragment>
      <h1>{props.appTitle}</h1>
      <p className={assignedClasses.join(' ')}>This is really working!</p>
      <button className={btnClass} onClick={props.toggle}>
        Show Persons
      </button>
      <button onClick={props.login}>Log In</button>
    </Fragment>
  );
};

export default cockpit;
