import React from 'react';
import Logo from '../Logo/Logo';

import classes from './SideDrawer.module.css';
import Backdrop from '../Backdrop/Backdrop';
import Navbar from '../../NavBar/Navbar';


// import NavCategory from '../../NavCategory/NavCategory';

const sideDrawer = ( props ) => {
    let attachedClasses = [classes.SideDrawer, classes.Close];
    if (props.open) {
        attachedClasses = [classes.SideDrawer, classes.Open];
    }
    
    return (
        <>
            <Backdrop show={props.open} clicked={props.closed}/>
            <div className={attachedClasses.join(' ')}>
                <div className={classes.Logo}>
                    <Logo />
                </div>
                <nav>
                <div className="Mobile">
                  {/* <NavCategory clicked={props.closed}/> */}
                  { <Navbar clicked = {props.closed}/> }
                  </div>
                </nav>
            </div>
        </>
    );
};

export default sideDrawer;