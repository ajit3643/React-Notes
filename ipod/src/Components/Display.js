// Desc: Display component
import "../Styles/Display.css";
import React from "react";
import { FaBatteryThreeQuarters } from "react-icons/fa";
import { FaWifi } from "react-icons/fa6";

import Coverflow from "./Coverflow";
import Music from "./Music";
import Games from "./Games";
import Settings from "./Settings";
import SideMenu from "./SideMenu";

class Display extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      display: {
        musicMenu: false,
        allSongs: false,
        artists: false,
        albums: false,
      },
      currentTime: new Date().toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      }),
      activeItemInMenu: this.props.activeItemInMusic,
    };
  }
  componentDidMount() {
    this.timerID = setInterval(() => this.tick(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({
      currentTime: new Date().toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      }),
    });
  }

  render() {
    const { sideMenu, coverflow, music, games } = this.props.display;
    const { currentTime } = this.state;
    const { activeItemInMenu } = this.props.activeItemInMenu;

    // Before component is mounted, set the values of currentScreenDispaly and currentOptionSelected
    const currentScreenDispaly = this.state.display;
    for (let item in currentScreenDispaly) {
      currentScreenDispaly[item] = false;
    }
    currentScreenDispaly[this.props.toShowInMusicComponent] = true;
    const currentOptionSelected = this.props.activeItemInMusic;

    return (
      <section id="screen">
        <div id="top-bar">
          <div id="wifi">
            <FaWifi />
          </div>
          <div id="time">{currentTime}</div>
          <div id="battery">
            <FaBatteryThreeQuarters />
          </div>
        </div>
        {!sideMenu ? (
          coverflow ? (
            <Coverflow />
          ) : music ? (
            <Music
              display={currentScreenDispaly}
              activeItemInMenu={currentOptionSelected}
            />
          ) : games ? (
            <Games />
          ) : (
            <Settings />
          )
        ) : (
          <SideMenu activeItemInMenu={activeItemInMenu} />
        )}
      </section>
    );
  }
}

export default Display;
