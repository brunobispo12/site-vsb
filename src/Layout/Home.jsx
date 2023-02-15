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
                            <p>VSB Representações é uma empresa especializada em representação comercial que visa fornecer serviços de vendas de produtos  para os clientes da Serra Gaúcha e litoral norte do Rio Grande do Sul. Temos experiência em vendas no segmento varejo material de construção, indústria metalúrgica, trabalhando próximo ao cliente para oferecer a melhor solução possível e dando suporte no pré-venda e no pós-venda.</p>
                            <p>Se você está procurando uma empresa dedicada a ajudar ao seu negócio crescer a VSB Representações é a empresa certa para você.
                            Entre em contato conosco para obter maiores informações sobre a nossas marcas representadas, para sua empresa e ou comercio crescer com o que existe de melhor no mercado, pois ofereceremos os  melhores produtos com um otimo custo benefício.
                            </p>
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