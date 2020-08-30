import React from "react";

import burgerLogo from "../../../assets/logo2.jpg";
import classes from "./Logo.module.css";
import { Link } from "react-router-dom";

const logo = (props) => (
  <div className={classes.Logo} style={{ height: props.height }}>
    
    <Link to="/">
    <img src={burgerLogo} alt="MyBurger" />
    </Link>
   
    
    
  </div>
);

export default logo;
