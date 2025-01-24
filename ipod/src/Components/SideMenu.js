import React, { useEffect } from "react";

function SideMenu(props) {
  const activeItemInMenu = props.activeItemInMenu;

  // Similar to componemtDidMount and componentDidUpdate of a class
  useEffect(() => {
    // Add active class to a particular option
    const menuItems = document.querySelectorAll("#side-menu tr");
    for (let item of menuItems) {
      if (item.getAttribute("data-option") === activeItemInMenu) {
        item.classList.add("active");
      }
    }
  });

  return (
    <table id="side-menu">
      <tbody>
        <tr>
          <th className="table-heading">iPod</th>
        </tr>
        <tr data-option="coverflow" className="active">
          <td className="table-item">Now Playing</td>
        </tr>
        <tr data-option="music">
          <td className="table-item">Music</td>
        </tr>
        <tr data-option="games">
          <td className="table-item">Games</td>
        </tr>
        <tr data-option="settings">
          <td className="table-item">Settings</td>
        </tr>
      </tbody>
    </table>
  );
}

export default SideMenu;
