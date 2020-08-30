import React from 'react';

import classes from './Toolbar.module.css';
import Logo from '../Logo/Logo';

import DrawerToggle from '../DrawerToggle/DrawerToggle';

import SocialMedia from '../SocialMedia/SocialMedia';
import Navbar from '../../NavBar/Navbar';

const toolbar = ( props ) => (
    <header className={classes.Toolbar}>
        <DrawerToggle clicked={props.drawerToggleClicked} />
        <div className={classes.Logo}>
            <Logo />
           
        </div>
        <nav className={classes.forsp}>
        <Navbar/>
        </nav>
       
        <nav className={classes.DesktopOnly}>
            
            <SocialMedia/>
        </nav>
    </header>
);

export default toolbar;