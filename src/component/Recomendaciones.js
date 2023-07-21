import React, { useState, useEffect } from "react";
import RecomendacionFragment from "./Fragment/RecomendacionFragment";
import mortal from '../assets/imagenes/mortal2.jpeg';
const Recomendaciones = () => {
    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <h1>Recomendaciones</h1>
                    </div>
                </div>
                <div className="row">
                    <div className="col-6">
                        <RecomendacionFragment>
                            titulo="Titulo1"
                            tipoAlerta="alert-success"
                            contenido 1 
                        </RecomendacionFragment>   
                    </div>
                    <div className="col-6">
                        <RecomendacionFragment>
                            titulo="Titulo2"
                            tipoAlerta="alert-danger"
                            contenido 2
                            <img src={mortal} alt="mortal" ></img>
                            
                        </RecomendacionFragment>
                    </div>
                </div>

            </div>
        </>
    )
}
export default Recomendaciones