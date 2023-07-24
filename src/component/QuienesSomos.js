import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../CSS/quinesSomos.css"
import quienesSomos from "../assets/imagenes/quines somos.webp"
import Eneba from "../assets/imagenes/Eneba-logo.png"
const QuienesSomos = () => {
    return (
        <>
            <body className="body1">

                <header className="header" >
                    <figure>
                        <img src={Eneba} className="imagen"></img>
                    </figure>
                    <ul className="nav nav-underline navs">
                        <li className="nav-item">
                            <Link to="/" className="nav-link letr">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/rembolso" className="nav-link letr">Contactanos</Link>
                        </li>

                    </ul>
                </header>
                <main>
                    <section className="inicio">
                        <div className="texto" style={{ width: "100%rem" }}>
                            <h2 className="tituloQuienesSomos">Nuestra Historia</h2>
                            <p>Vytis y Zygis, cofundadores de Eneba, son ávidos jugadores. Su historia comenzó a principios de la década del 2000, compartiendo dormitorio. Siendo estudiantes, pasaron incontables noches jugando a StarCraft, Lineage II, WarCraft, Heroes III, Command & Conquer, Civilization, FIFA, NBA, NukeZone, Counter-Strike y Doom, por nombrar algunos. Y, de hecho, la mayoría de las primeras ideas de negocio se les ocurrieron mientras jugaban. Tras crear un par de empresas y aprender mucho, nuestros cofundadores decidieron volver a lo que les hizo emprender: ¡el juego! Así es como surgimos. Eneba nació en 2018. Hoy en día, nuestro marketplace soporta más de 5m de usuarios activos (¡y creciendo rápidamente!), proporciona un nivel de confianza, seguridad y accesibilidad al mercado sin igual. ¡Estamos orgullosos de lo que hemos logrado en tan poco tiempo y estamos deseando compartir este viaje contigo!</p>
                        </div>
                        <div className="imagenq">
                            <img src={quienesSomos} className="card-img-top imagenw " alt="..."></img>
                        </div>


                    </section>
                </main>
            </body>
        </>
    )

}
export default QuienesSomos