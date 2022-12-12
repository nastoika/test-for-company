import React from 'react';
import classes from './Footer.module.css';

const Footer = ({ count, state }) => {
  return (
    <div>
      <div className={classes.sum}>
        Selected <span className={classes.numb}>{count}</span> lines out of
        <span className={classes.numb}> {state.length}</span>
      </div>
      <div className={classes.info}>
        *To select a row, select a cell and right-click
        <br />
        *To edit a cell, click on the text
      </div>
    </div>
  );
};

export default Footer;
