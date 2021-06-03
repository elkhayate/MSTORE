import React from 'react';
import style from "./nav.module.css";
import {Link} from "react-router-dom";
import logo from "./img/mslogo.png";
import info from "./img/info.png";

function Nav() {
    return(
       
            <nav className={style.nav}>
                <Link to ="/">
                    <div className={style.logo}><img src={logo} alt="logo" /></div>
                </Link>
                <Link to="/info">
                    <div className={style.info}><img src={info} alt="info"/></div>
                </Link>
            </nav>
     
    )
}



export default Nav;