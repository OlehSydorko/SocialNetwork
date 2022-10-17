import React from "react";
import {NavLink} from "react-router-dom";
import classes from "./Nav.module.css";
import './Nav.module.css'

const nav = () => {
    return <nav className={classes.nav}>
        <div className={classes.item}>
            <NavLink
                to='/profile'
                className={({isActive}) => isActive ? classes.activeLink : undefined}
            >
                Profile
            </NavLink>
        </div>
        <div className={classes.item}>
            <NavLink
                to='/dialogs'
                className={({isActive}) => isActive ? classes.activeLink : undefined}
            >
                Messages
            </NavLink>
        </div>
        <div className={classes.item}>
            <NavLink to='/users'
                     className={({isActive}) => isActive ? classes.activeLink : undefined}>
                Users
            </NavLink>
        </div>
        <div className={classes.item}>
            <NavLink to='/music'
                     className={({isActive}) => isActive ? classes.activeLink : undefined}>
                Music
            </NavLink>
        </div>
        <div className={classes.item}>
            <NavLink to='/settings'
                     className={({isActive}) => isActive ? classes.activeLink : undefined}>
                Settings
            </NavLink>
        </div>
    </nav>

}
export default nav