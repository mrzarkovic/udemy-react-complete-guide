import React from 'react';

import classes from './Person.css';

const person = props => {
  const rand = Math.random();
  if (rand > 0.7) {
    throw new Error('Something went wrong!');
  }

  return (
    <div className={classes.Person}>
      <h3>{props.name}</h3>
      <p onClick={props.click}>I am a Person and I am {props.age} years old.</p>
      <p>{props.children}</p>
      <input
        type="text"
        value={props.name}
        onChange={evt => props.changed(evt, props.id)}
      />
    </div>
  );
};

export default person;
