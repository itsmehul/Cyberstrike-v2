import React, { Component } from "react";
import styles from "./events.module.scss";
import Layout from "../components/layout";
import eventdata from "../data/events.json";


const EventCard = ({
  Date,
  type,
  fee,
  maindesc,
  src,
  short,
  teamSize,
  title
}) => {
  return (
    <section id={styles.imgcard}>
      <img src={src} alt="xyz"/>
      <button>
        <b>{title}</b> <br />{" "}
        <span style={{ fontSize: "13px" }}>KNOW MORE</span>
      </button>
      <div id={styles.cardbody}>
        <h3 id={styles.ctitle}>{title}</h3>
        <p id={styles.cdescription}>{short}</p>
        <div id={styles.cmeta}>
          <p>Price: {fee}</p>
          <p>Team Size: {teamSize}</p>
          <p>Type: {type}</p>
          <p>December 5, 2018 &amp; December 6, 2018</p>
        </div>
      </div>
    </section>
  );
};

class Events extends Component {
  state = {
    showEvents: false,
    showTs:false,
  };

  toggleShowEvents = () => {
    this.setState({ showEvents: !this.state.showEvents });
  };

  toggleShowTs = () => {
    this.setState({showTs:!this.state.showTs})
  }

  componentDidMount(){
    // const townscriptScript = document.createElement("script");
    // townscriptScript.setAttribute("src", "//www.townscript.com/popup-widget/townscript-widget.nocache.js");
    // document.head.appendChild(townscriptScript);
    window.addEventListener('scroll', (e)=>this.handleScroll(e));
  }

  handleScroll = () => {
    let heading = document.getElementById('heading')
    if(window.pageYOffset>10){
      heading.style.backgroundColor="rgba(0,0,0,0.8)";
      // heading.style.height="65px";

      return
    }
    heading.style.backgroundColor="transparent";

  }

  render() {
    const games = Object.values(eventdata).filter(g => g.genre === "game");
    const events = Object.values(eventdata).filter(e => e.genre === "event");
    return (
      <Layout>
        <div className={styles.container}>
        <div className={styles.tS} style={this.state.showTs===true
                    ? { display:'grid' }
                    : { display:'none' }  
      }>
        <button 
          onClick={()=>this.toggleShowTs()}
          >&times;</button>
        <iframe src="https://www.townscript.com/widget/cyberstrike" frameborder="0" height="600" width="100%"></iframe></div>
          <div id='heading' className={styles.heading}>
            <p
              className={styles.gamesTitle}
              style={
                !this.state.showEvents
                  ? { fontSize: "50px" }
                  : { fontSize: "30px" }
              }
              onClick={() => this.setState({showEvents:false})}
            >
              Games
            </p>
            <p
              className={styles.eventTitle}
              onClick={() => this.setState({showEvents:true})}
              style={
                this.state.showEvents
                  ? { fontSize: "50px" }
                  : { fontSize: "30px" }
              }
            >
              Events
            </p>
          </div>
          <div className={styles.cards}>
            {this.state.showEvents===true&&(events.map(
              ({ Date, type, fee, maindesc, src, short, teamSize, title }) => (
                <EventCard
                  type={type}
                  fee={fee}
                  maindesc={maindesc}
                  src={src}
                  short={short}
                  teamSize={teamSize}
                  title={title}
                />
              )
            ))}
            {this.state.showEvents===false&&(games.map(
              ({ Date, type, fee, maindesc, src, short, teamSize, title }) => (
                <EventCard
                  type={type}
                  fee={fee}
                  maindesc={maindesc}
                  src={src}
                  short={short}
                  teamSize={teamSize}
                  title={title}
                />
              )
            ))}
          </div>
          <button
          onClick={()=>this.toggleShowTs()}
          // class="tsbutton"
          className={styles.regbtn}
        >
          Register Here!
        </button>
        
        </div>
      </Layout>
    );
  }
}

export default Events;
