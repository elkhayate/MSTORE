import React from 'react';
import style from "./info.module.css";
import wsp from "../img/wsp.png";
import mail from "../img/mail.png";


function Info() {
    return(
        <div className={style.container}>
            <div className={style.info}>
                <h1>Contact us, to buy the product. </h1>
                <div className={style.items}>
                    <div className={style.item}>
                    <a href="https://wa.link/4bil0w" ><img src={wsp} alt="whatsapp"/></a>
                    </div>
                    <div className={style.item}>
                    <a href="mailto:elkhayatemohamed1@gmail.com?Subject=Some%20subject" ><img src={mail} alt="mail"/></a>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default Info;
