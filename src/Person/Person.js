import React from 'react';
import Radium from 'radium';

import './Person.css';

const person = props => {
  const styles = {
    '@media (min-width: 500px)': {
      width: '450px'
    }
  };

  return (
    <div className="Person" style={styles}>
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

export default Radium(person);
