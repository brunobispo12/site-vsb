/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import './Catalog.css';
import LogoBerwanger from '../Images/LogoBerwanger.png';
import LogoFloresta from '../Images/logo-floresta.png';
import LogoAC from '../Images/logo-ac.png';
import LogoRedes from '../Images/logo-redescor.png';
import CatalogItem from '../Components/CatalogItem.jsx'

const Main = () =>{
    return(
        <section className="Catalog">
            <h2>Catálagos</h2>
            <div className="Catalog-Conteiner">
                <CatalogItem title="Berwanger" image={LogoBerwanger} link="https://drive.google.com/file/d/1rsGki42gGqGOEtvj4h0oNGgdvFxqW_-j/view?usp=sharing"/>
                <CatalogItem title="Redescor" image={LogoRedes} link="http://www.redescor.com.br/redescor/"/>
                <CatalogItem title="Floresta" image={LogoFloresta} link="https://drive.google.com/file/d/1v3PE7mBRh81N7UpC0DAsNobF6e_vKbpr/view?usp=sharing"/>
                <CatalogItem title="Ac Madeiras" image={LogoAC} link="https://www.instagram.com/stories/highlights/17942847266118584/"/>
            </div>
        </section>
    )
}

export default Main