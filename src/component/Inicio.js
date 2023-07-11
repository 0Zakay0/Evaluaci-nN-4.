import React, {useEffect, useState} from "react";
import { Link } from "react-router-dom";

const Inicio = () => {
    return(
        <>
        <h1>Inicio</h1>
        <Link to="/perfil"> perfil</Link><br></br>
        <Link to="/ejercicio"> Ejercicio</Link>
        </>
    )
}
 export default Inicio