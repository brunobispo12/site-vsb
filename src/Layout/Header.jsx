/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/anchor-has-content */
import React from "react";
import './Header.css'

const Header = () =>{
    return(
        <header>
            <div className="logo-vsb">
                <h1>VSBrepresentações</h1>
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