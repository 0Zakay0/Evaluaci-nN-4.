import React, { useState, useEffect } from "react";
import Eneba from "../assets/imagenes/Eneba-logo.png"
import "../CSS/Rembolso.css"
import { Link } from "react-router-dom";
import RecomendacionFragment from "./Fragment/RecomendacionFragment";
const Rembolso = () => {
    return (
        <>
            <body className="body3"><section className="inicio1">
                <header>
                    <figure>
                        <img src={Eneba} className="imagen"></img>
                    </figure>
                    <ul className="nav nav-underline navs">
                        <li className="nav-item">
                            <Link to="/" className="nav-link letr">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/quienesSomos" className="nav-link letr">Quienes Somos?</Link>
                        </li>
                    </ul>
                    <div className="problemas">
                        <h1>¿Contactanos!</h1>
                    </div>
                    <div className="row rembolso1">
                        <div className="col-4 problemas1 ">
                            <RecomendacionFragment
                                titulo={"Desarrollo de Negocios"}
                                textoDescripcion={"¿Quieres trabajar con nosotros o tienes preguntas relacionadas sobre el negocio? Contáctanos en:"}
                                correo={"business@eneba.com"}
                                Nombre={"business@eneba.com"}
                            />
                        </div>
                        <div className="col-4 problemas1 ">
                            <RecomendacionFragment
                                titulo={"Departamento legal"}
                                textoDescripcion={"Si tienes preguntas sobre asuntos legales, contáctanos en:"}
                                correo={"legal@eneba.com"}
                                Nombre={"legal@eneba.com"}
                            />
                        </div>
                        <div className="col-4 problemas1">
                            <RecomendacionFragment
                                titulo={"Equipo de Talento"}
                                textoDescripcion={"¿Buscando un nuevo trabajo? Ponte en contacto con nuestro equipo de Talento en:"}
                                correo={"jobs@eneba.com"}
                                Nombre={"jobs@eneba.com"}
                            />
                        </div>
                    </div>
                </header>
            </section>
            </body>
        </>
    )
}
export default Rembolso
