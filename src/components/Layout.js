import React from "react";
import Header from "./Header";
import { withPrefix } from "gatsby-link";
import styles from "./Layout.module.scss";
import PageTransition from "gatsby-plugin-page-transitions";

const Layout = ({ children }) => {
  if (typeof window !== `undefined`) {
    var isHomepage = window.location.pathname === withPrefix("/");
    var isEvents = window.location.pathname === withPrefix("/events");
    // var isAboutus = location.pathname === withPrefix('/aboutus')
    // var isContact = location.pathname === withPrefix('/contacts')
  }
  return (
    <React.Fragment>
      {
        <video autoPlay muted loop className={styles.myVideo}>
          <source src="static/homevidtest.mp4" type="video/mp4" />
        </video>
      }
      <Header />

      <PageTransition
        defaultStyle={{
          transition: "left 700ms cubic-bezier(0.47, 0, 0.75, 0.72)",
          left: "100%",
          position: "absolute",
          width: "100%"
        }}
        transitionStyles={{
          entering: { left: "0%" },
          entered: { left: "0%" },
          exiting: { left: "100%" }
        }}
        transitionTime={600}
      >
        {children}
      </PageTransition>
    </React.Fragment>
  );
};

export default Layout;
