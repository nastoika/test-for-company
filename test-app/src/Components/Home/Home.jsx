import React from 'react';
import classes from './Home.module.css';

const Home = () => {
  return (
    <div className={classes.home}>
      <div className={classes.homeTitle}>The top programming languages</div>
      <div className={classes.descr}>
        <p>
          In 2022, developers used almost 500 primary languages to build
          software on GitHub. The changes in what languages developers are using
          underscore key shifts in how software is being built—and what kinds of
          software are being developed.
        </p>
        <p>
          Whether you’re new to programming or looking to brush up on your
          skills, it helps to know which languages are in high demand. Here are
          10 of the most popular programming languages of 2020 based on the
          number of job postings listed on job search site Indeed, the average
          annual salary for those jobs, and factors such as ease of use and
          potential for growth.
        </p>
      </div>
      <div className={classes.langs}>
        <div>JavaScript</div>
        <div>Python</div>
        <div>Java</div>
        <div>Ruby</div>
        <div>C++</div>
        <div>PHP</div>
        <div>C</div>
      </div>
    </div>
  );
};

export default Home;
