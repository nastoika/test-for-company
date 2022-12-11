import React from 'react';
import classes from './Info.module.css';

const Info = () => {
  return (
    <div className={classes.descr}>
      <div className={classes.container}>
        <div className={classes.title}>What is GitHub?</div>
        <div className={classes.text}>
          GitHub is a web-based version-control and collaboration platform for
          software developers. Microsoft, the biggest single contributor to
          GitHub, initiated an acquisition of GitHub for $7.5 billion in June,
          2018. GitHub, which is delivered through a software-as-a-service
          (SaaS) business model, was started in 2008 and was founded on Git, an
          open source code management system created by Linus Torvalds to make
          software builds faster.
        </div>
      </div>
      <div className={classes.image}></div>
    </div>
  );
};

export default Info;
