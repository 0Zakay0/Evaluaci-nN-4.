import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Inicio_Fragment = ({ imagen, titulo,precio, link }) => {
    return (

        <>
            
            <img src={imagen} className="card-img-top logo1" alt="..."></img>
            <div className="card-body carta1">
                <h5 className="card-title titulo">{titulo}</h5>
                <p>{precio}</p>
                <Link to={link} className="btn btn-primary boton">Obtener</Link>
            </div>
            

        </>
    )
}

export default Inicio_Fragment