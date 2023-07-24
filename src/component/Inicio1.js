import React, { useState, useEffect } from "react";
import Eneba from "../assets/imagenes/Eneba-logo.png"
import Carucel from "../assets/imagenes/carucel.webp"
import Carucel1 from "../assets/imagenes/carucel2.jpg"
import Carucel2 from "../assets/imagenes/carucel3.webp"
import gta from "../assets/imagenes/gta5.jpeg"
import dragonball from "../assets/imagenes/dragonballxenoverse2.jpeg"
import hollow from "../assets/imagenes/hollowknight.jpg"
import moveDie from "../assets/imagenes/moveOrDie.jpeg"
import minecraft from "../assets/imagenes/minecraft1.jpg"
import mortalkombat from "../assets/imagenes/mortalkombat.jpeg"
import Inicio_Fragment from "./Fragment/Inicio_Fragment";
import "../CSS/Inicio1.css"
import { Link } from "react-router-dom";

const Games = () => {
    const [selectedCurrency, setSelectedCurrency] = useState("CLP");
    const [exchangeRates, setExchangeRates] = useState({
        CLP: 1,
        ARS: 0.011,
        USD: 750,
    });
    const [pricesInSelectedCurrency, setPricesInSelectedCurrency] = useState({});

    const handleCurrencyChange = (event) => {
        setSelectedCurrency(event.target.value);
    };

    const handleConfirmClick = () => {
        const updatedExchangeRates = {
            CLP: 1,
            ARS: 0.012,
            USD: 0.0012,
        };
        setExchangeRates(updatedExchangeRates);
        const updatedPrices = {
            gta: Math.round(updatedExchangeRates[selectedCurrency] * 9337),
            dragonball: Math.round(updatedExchangeRates[selectedCurrency] * 8536),
            hollow: Math.round(updatedExchangeRates[selectedCurrency] * 8625),
            minecraft: Math.round(updatedExchangeRates[selectedCurrency] * 23380),
            mortalkombat: Math.round(updatedExchangeRates[selectedCurrency] * 4343),
            moveDie: Math.round(updatedExchangeRates[selectedCurrency] * 3220),
        };
        setPricesInSelectedCurrency(updatedPrices);
    };
    return (
        <>
            <body>
                <section className="inicio">
                    <header >
                        <figure>
                            <img src={Eneba} className="imagen"></img>
                        </figure>
                        <ul className="nav nav-underline navs">

                            <li className="nav-item">
                                <Link to="/rembolso" className="nav-link letr">Contactanos</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/quienesSomos" className="nav-link letr">Quienes Somos?</Link>
                            </li>
                        </ul>
                    </header>
                    <main>
                        <section className="seccion1">
                            <div className="card1" style={{ width: "100%rem" }}>
                                <Inicio_Fragment
                                    imagen={gta}
                                    titulo={"Grand Theft Auto V: Premium Online Edition Rockstar  Key GLOBAL"}
                                    precio={pricesInSelectedCurrency["gta"] + " " + selectedCurrency}
                                    link={"/compra"}
                                />
                            </div>
                            <div className="card2" style={{ width: "100%rem" }}>
                                <Inicio_Fragment
                                    imagen={dragonball}
                                    titulo={"Dragon Ball: Xenoverse 2 - Super Pass (DLC) Steam Key GLOBAL"}
                                    precio={pricesInSelectedCurrency["dragonball"] + " " + selectedCurrency}
                                    link={"/compra"}
                                />
                            </div>
                            <div className="card3" style={{ width: "100%rem" }}>
                                <Inicio_Fragment
                                    imagen={hollow}
                                    titulo={"Hollow Knight Código de Steam GLOBAL"}
                                    precio={pricesInSelectedCurrency["gta"] + " " + selectedCurrency}
                                    link={"/compra"}
                                />
                            </div>
                            <div className="card4" style={{ width: "100%rem" }}>
                                <Inicio_Fragment
                                    imagen={minecraft}
                                    titulo={"Minecraft: Java & Bedrock Edition Official website Key GLOBAL"}
                                    precio={pricesInSelectedCurrency["hollow"] + " " + selectedCurrency}
                                    link={"/compra"}
                                />
                            </div>
                            <div className="card5" style={{ width: "100%rem" }}>
                                <Inicio_Fragment
                                    imagen={mortalkombat}
                                    titulo={"Mortal Kombat 11 Steam Key LATAM"}
                                    precio={pricesInSelectedCurrency["mortalkombat"] + " " + selectedCurrency}
                                    link={"/compra"}
                                />
                            </div>
                            <div className="card6" style={{ width: "100%rem" }}>
                                <Inicio_Fragment
                                    imagen={moveDie}
                                    titulo={"Move or Die Steam Key LATAM"}
                                    precio={pricesInSelectedCurrency["moveDie"] + " " + selectedCurrency}
                                    link={"/compra"}
                                />
                            </div>
                        </section>
                        <section className="seccion2">
                            <div id="carouselExampleRide" className="carousel slide paginas" data-bs-ride="true">
                                <div className="carousel-inner">
                                    <div className="carousel-item active">
                                        <img src={Carucel} className="d-block w-100" alt="..."></img>
                                    </div>
                                    <div className="carousel-item">
                                        <img src={Carucel2} className="d-block w-100" alt="..."></img>
                                    </div>
                                    <div className="carousel-item">
                                        <img src={Carucel1} className="d-block w-100" alt="..."></img>
                                    </div>
                                </div>
                                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleRide" data-bs-slide="prev">
                                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                    <span className="visually-hidden">Previous</span>
                                </button>
                                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleRide" data-bs-slide="next">
                                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                    <span className="visually-hidden">Next</span>
                                </button>
                            </div>
                            <div className="titulo1">
                                <h>Preguntas Frecuentes</h>
                            </div>
                            <div className="accordion accordion-flush" id="accordionFlushExample">
                                <div className="accordion-item ">
                                    <h2 className="accordion-header">
                                        <button className="accordion-button collapsed fondo_color" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                                            ¿Que tipos de Juegos vendemos?
                                        </button>
                                    </h2>
                                    <div id="flush-collapseOne" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                                        <div className="accordion-body letras_fondo">Videojuegos y tarjetas prepago de PSN, Xbox y Steam, ¡ahora más baratas! ¡Obtén juegos y tarjetas prepago de PC, PSN, Xbox y Nintendo de forma segura y asequible! Soporte mundial. Envío inmediato. Sin impuestos extra. Y los mejores precio</div>
                                    </div>
                                </div>
                                <div className="accordion-item">
                                    <h2 className="accordion-header">
                                        <button className="accordion-button collapsed fondo_color1" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                                            Metodos de pagos
                                        </button>
                                    </h2>
                                    <div id="flush-collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                                        <div className="accordion-body letras_fondo">Soportamos una gran variedad de métodos de pago para proporcionar el mejor servicio y la satisfacción de nuestros clientes. </div>
                                    </div>
                                </div>
                                <div className="accordion-item">
                                    <h2 className="accordion-header">
                                        <button className="accordion-button collapsed fondo_color2" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                                            ¿Como se canjean los Juegos?
                                        </button>
                                    </h2>
                                    <div id="flush-collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                                        <div className="accordion-body letras_fondo">Recibirás el código del juego en el mismo día que esté oficialmente disponible, despues que obtengas el codigo entra a steam y haz click en "Mi Biblioteca de Juegos", elige "AÑADIR UN JUEGO" y haz click en "Canjear Código". </div>
                                    </div>
                                </div>
                            </div>
                            <div className="select-currency">
                                <label htmlFor="currency">Seleccionar moneda:</label>
                                <select
                                    id="currency"
                                    value={selectedCurrency}
                                    onChange={handleCurrencyChange}
                                >
                                    <option value="CLP">CLP (Peso Chileno)</option>
                                    <option value="ARS">ARS (Peso Argentino)</option>
                                    <option value="USD">USD (Dolares)</option>
                                </select>
                                <button onClick={handleConfirmClick}>Confirmar</button>
                            </div>
                        </section>
                    </main>
                </section>
            </body>
        </>
    )
}
export default Games