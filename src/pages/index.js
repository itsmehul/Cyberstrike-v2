import React, { useState, useEffect } from "react";
import styles from "./index.module.scss";
import Layout from "../components/layout";
import { cold } from "react-hot-loader";
import Countdown from "react-countdown-now";

const Index = () => {
  const renderer = ({ days, hours, minutes, seconds, completed }) => {
    if (completed) {
      return <h1>It's today!</h1>;
    } else {
      return (
        <div className={styles.countDown}>
          <div className={styles.smalltext}>{days} d</div>
          <div className={styles.smalltext}>{hours} h</div>
          <div className={styles.smalltext}>{minutes} m</div>
          <div className={styles.smalltext}>{seconds} s</div>
        </div>
      );
    }
  };
  return (
    <Layout>
      <React.Fragment>
        <div className={styles.body}>
        <img
              className={styles.logo1}
              src="static/assets/dcclogocompressed.png"
            />
                        <img
              className={styles.logo2}
              src="static/assets/jhclogocompressed.png"
            />
          <div className={styles.cyberTitle}>
            <p>CYBERSTRIKE</p>
          </div>
          <Countdown
            date={new Date("Dec 5, 2018 00:00:00").getTime()}
            renderer={renderer}
          />
        </div>
      </React.Fragment>
    </Layout>
  );
};
export default cold(Index);
