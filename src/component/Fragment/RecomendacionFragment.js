import React, { useEffect, useState} from "react";
import { Link } from "react-router-dom";


const RecomendacionFragment = ({ titulo, textoDescripcion,correo, Nombre}) =>{
    return(
        <>
            <div className="card" style={{width: "18rem"}}>
                    <div className="card-body">
                        <h5 className="card-title">{titulo}</h5>
                        <hr></hr>
                            <p className="card-text">{textoDescripcion}</p>
                            <Link to={correo} className="linkCorreo">{Nombre}</Link>
                    </div>
            </div>
        </>
    )
}
export default RecomendacionFragment