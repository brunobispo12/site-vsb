import React from "react";
import './Home.css';
import LogoBerwanger from '../Images/LogoBerwanger.png';
import LogoFloresta from '../Images/logo-floresta.png';
import LogoAC from '../Images/logo-ac.png';
import LogoRedes from '../Images/logo-redescor.png';

const Main = () =>{
    return(
            <section className="VSB-Home">
                <div className="Conteiner-Home">
                    <div className="VSB-About">
                        <div className="text">
                            <h1>VSB Representações</h1>
                            <p>VSB é uma empresa especializada em fornecer vendas e serviços exepcionais para todos os clientes. Temos experiência em vendas e um conhecimento amplo da indústria metalúrgica e varejo de materiais de construção, trabalhando próximo ao cliente para oferecer a melhor solução possivel e dando suporte no pré e no pós venda.</p>
                            <p>Se você está procurando uma empresa dedicada a ajudar ao seu négocio crescer a VSB é a empresa certa para você. Entre em contato conosco hoje para obter mais informações.</p>
                        </div>
                    </div>
                    <div className="About-Images">
                        <div className="principal">
                            <img src={LogoBerwanger} alt="Logo empresa berwanger" />
                        </div>
                        <div className="image redes">
                            <img src={LogoRedes} alt="Logo empresa Redescore" />
                        </div>
                        <div className="image">
                            <img src={LogoFloresta} alt="Logo empresa Floresta" />
                        </div>
                        <div className="image">
                            <img src={LogoAC} alt="Logo empresa AC madeiras" />
                        </div>
                    </div>
                </div>
            </section>
    )
}

export default Main