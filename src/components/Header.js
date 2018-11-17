import React, { Component } from "react";
import { cold } from "react-hot-loader";
import Link from "gatsby-link";
import styles from "./header.module.scss";
import { withPrefix } from "gatsby-link";

class Header extends Component {
  state = {
    showSidebar: false
  };
  componentDidMount() {

    window.addEventListener("scroll", e => this.handleScroll(e));
  }

  handleScroll = e => {
    let mynav = document.getElementById("mynav");
    if (window.pageYOffset > 0) {
      mynav.style.backgroundColor = "rgba(0,0,0,0.8)";
      return;
    }
    mynav.style.backgroundColor = "transparent";
  };

  render() {
    if (typeof window !== `undefined`) {
      var isHomepage = window.location.pathname === withPrefix("/");
      var isContacts = window.location.pathname === withPrefix("/contacts");
      var isAboutus = window.location.pathname === withPrefix("/aboutus");
    }

    const links = [
      { page: "HOME", path: "/" },
      { page: "EVENTS", path: "/events/" },
      // { page: "SCORE", path: "/score" },
      { page: "CONTACT US", path: "/contacts/" }
    ];

    return (
      <React.Fragment>
        <div
          className={styles.sidebar}
          style={
            this.state.showSidebar === false
              ? { transform: "translateX(-320px)" }
              : { transform: "translateX(0px)" }
          }
        >
          {links.map(link => (
            <Link
              className={styles.fontfam}
              to={link.path}
              style={{
                color: "white",
                textDecoration: "none",
                marginRight: 30,
                display: "block"
              }}
            >
              {link.page}
            </Link>
          ))}
        </div>
        <nav
          id="mynav"
          style={{
            margin: 0,
            display: "flex",
            flex: 1,
            justifyContent: "flex-end",
            alignItems: "center",
            height: "60px",
            position: "sticky",
            top: "0",
            zIndex: "5"
          }}
        >
          <div
            className={styles.smenu}
            onClick={() =>
              this.setState({ showSidebar: !this.state.showSidebar })
            }
          >
            <img src="/static/assets/icons/smenu.svg" />
          </div>

          <Link to="/" className={styles.cyberstrike}>
            <p
              style={{
                top: "-1px",
                position: "relative"
              }}
            >
              CYBERSTRIKE
            </p>
          </Link>
          <div className={styles.navbar}>
            {links.map(link => (
              <Link
                className={styles.fontfam}
                to={link.path}
                style={{
                  color: "white",
                  textDecoration: "none",
                  marginRight: 30,
                  display: "inline-block"
                }}
                activeStyle={{
                  transform: "scale(1.1)",
                  fontWeight: "bold"
                }}
              >
                {link.page}
              </Link>
            ))}
          </div>
        </nav>
      </React.Fragment>
    );
  }
}

export default cold(Header);
