import React from 'react';
import classes from './Description.module.css';

const Description = () => {
  return (
    <div className={classes.description}>
      <div className={classes.name}>Admin</div>
      <div className={classes.about}>
        <div>Date of Birth: 28 October</div>
        <div>City: Minsk</div>
        <div>Education: BSUIR'23</div>
        <div>E-mail: nastya111111@mail.ru</div>
      </div>
    </div>
  );
};

export default Description;
