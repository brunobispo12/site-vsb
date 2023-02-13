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
                <a href="#Catalog">Catálogo</a>
                <a href="#Contacts">Contatos</a>
            </nav>
        </header>
    )
}

export default Header