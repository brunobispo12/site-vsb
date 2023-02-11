/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/anchor-has-content */
import React from "react";
import './Header.css'
import image from '../Images/testevsb.png'
const Header = () =>{
    return(
        <header>
            <div className="logo-vsb">
                <img src={image} alt="" />
            </div>
            <nav className="nav-header">
                <a href="#">Home</a>
                <a href="#">Sobre nós</a>
                <a href="#">Catálogo</a>
                <a href="#">Contato</a>
            </nav>
        </header>
    )
}

export default Header