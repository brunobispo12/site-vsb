/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/anchor-has-content */
import React from "react";
import './Footer.css'
import WhatsAppIco from '../Images/bxl-whatsapp-square.png';
import InstagramIco from '../Images/bxl-gmail.png';
import GmailIco from '../Images/bxl-instagram.png';
;
const Footer = () =>{
    return(
        <footer className="footer">
            <div className="Contatcs">
                <h4>Contatos</h4><br/>
                <p><h5>Email:</h5> vsbrepre@gmail.com</p>
                <p><h5>Celular:</h5> (54) 99178-5666</p>
            </div>
            <div className="Icon-links">
                <a href="#"><img src={WhatsAppIco} alt="" /></a>
                <a href="#"><img src={InstagramIco} alt="" /></a>
                <a href="#"><img src={GmailIco} alt="" /></a>
            </div>
        </footer>
    )
}

export default Footer