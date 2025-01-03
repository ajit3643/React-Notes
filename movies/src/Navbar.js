import { Component } from "react";

class Navbar extends Component {
  render() {
    return (
      <>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            width: "100%",
            height: 70,
            backgroundColor: "black",
            color: "white",
          }}
        >
          <div className="title">Movie-App</div>
          <div className="cart">
            <img
              alt="cart"
              //   src="https://cdn-icons-png.flaticon.com/128/2567/2567829.png"
            />
            <span>0</span>
          </div>
        </div>
      </>
    );
  }
}
export default Navbar;
