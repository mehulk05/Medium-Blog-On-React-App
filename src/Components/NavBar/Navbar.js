import React from "react";
import { NavLink } from "react-router-dom";

function Navbar(props) {
  return (
    <>
      <ul className="ullist">
        <li>
          <NavLink exact={true} to="/" onClick={props.clicked}>
            Home
          </NavLink>{" "}
        </li>
        <li>
          {" "}
          <NavLink to="/about-author" onClick={props.clicked}>
            About Author
          </NavLink>
        </li>
        <li>
          {" "}
          <NavLink to="/about-project" onClick={props.clicked}>
            About this Project
          </NavLink>
        </li>
      </ul>
    </>
  );
}

export default Navbar;
