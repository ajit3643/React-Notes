import "../Styles/Controls.css";

import { IoPlayBack } from "react-icons/io5";
import { IoPlayForward } from "react-icons/io5";
import { HiMiniPlayPause } from "react-icons/hi2";

function Controls(props) {
  return (
    <section id="controls" onClick={props.rotateEvent}>
      <div id="wheel">
        <span
          id="menu-button"
          className="buttons"
          style={{ top: 20 }}
          onClick={props.handleMenuClick}
        >
          MENU
        </span>

        <IoPlayBack
          style={{ left: 13, width: 40 }}
          className="buttons"
          draggable="false"
          alt="left"
        />

        <IoPlayForward
          style={{ right: 13, width: 40 }}
          className="buttons"
          draggable="false"
          alt="right"
        />

        <HiMiniPlayPause
          style={{ bottom: 13, width: 30, height: 37 }}
          className="buttons"
          draggable="false"
          alt="bottom"
        />

        <div id="ok-button" onClick={props.handleOk}></div>
      </div>
    </section>
  );
}

export default Controls;
