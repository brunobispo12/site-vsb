import React from "react";
import './CatalogItem.css'
import LinkIcon from '../Images/link-icon.png'

const CatalogItem = (props) =>{
    return(
        <div>
            <div className="Catalog-Item">
                <div className="Image-Catalog">
                    <img src={props.image} alt="" />
                </div>
                <div className="Desc-Item">
                    <h3>{props.title}</h3>
                    <a href={props.link} target="_blank" rel="noreferrer">Ver Catálogo 
                    <img className="icon-link" src={LinkIcon} alt=""/></a>
                </div>
            </div>
        </div>
    )
}

export default CatalogItem