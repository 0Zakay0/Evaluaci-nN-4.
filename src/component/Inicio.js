import React, {useEffect, useState} from "react";
import { Link } from "react-router-dom";
import gta from '../assets/imagenes/gta.jpeg';
import street from '../assets/imagenes/street.jpg';
import mortal from '../assets/imagenes/mortal2.jpeg';
const Inicio = () => {
    return(
        <>
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <h1>Nuevo titulo</h1>
                </div>
            </div>
            
            <h1>Inicio</h1>
            <Link to="/perfil"> perfil</Link><br></br>
            <Link to="/ejercicio"> Ejercicio</Link><br></br>
            <Link to="/usuario"> Usuario</Link>
            <br></br>
            <div className="col-12">
                <h1>Juegos Eneba</h1><hr></hr>
            </div>
            <div className="row">
                <div className="col-4">
                <h2>GTA 5</h2>
                    <div className="card" style={{width: "18rem"}}>
                        <img src={gta} className="card-img-top" alt="..."></img>
                        <div className="card-body">
                            <h5 className="card-title">Grand Theft Auto V: Premium Online Edition Rockstar Games</h5>
                            <p className="card-text">Al comprar Grand Theft Auto V: Edición online Premium te sumergirás en el inmenso mundo de GTA online con un montón de contenido.¡Vale la pena adentrarte en él!</p>
                            <Link to="https://www.eneba.com/rockstar-social-club-grand-theft-auto-v-premium-online-edition-rockstar-social-club-key-global" className="btn btn-primary">Go somewhere</Link>
                        </div>
                    </div>
                </div>
                <div className="col-4">
                    <h2>Mortal Kombat 11</h2>
                    <div className="card" style={{width: "18rem"}}>
                        <img src={mortal} className="card-img-top" alt="..."></img>
                        <div className="card-body">
                            <h5 className="card-title">Mortal Kombat 11</h5>
                            <p className="card-text">La increíble violencia es la razón por la que la franquicia ha sido conocida desde su inicio. Al igual que con cada nueva versión, llegan ¡mejores gráficos y tecnología que permiten muertes aún más impactantes, brutales y realistas!  </p>
                            <Link to="https://www.eneba.com/steam-mortal-kombat-11-steam-key-latam" className="btn btn-primary">Go somewhere</Link>
                        </div>
                    </div>
                </div>
                <div className="col-4">
                    <h2>Street Fighter 6</h2>
                    <div className="card" style={{width: "18rem"}}>
                        <img src={street} className="card-img-top" alt="..."></img>
                        <div className="card-body">
                            <h5 className="card-title">Street Fighter 6</h5>
                            <p className="card-text">Prepárate para dar rienda suelta al guerrero que llevas dentro con Street Fighter 6, ¡la experiencia de juego de lucha definitiva! Con su avanzado sistema de combate y sus innovadoras características, llevando el género al siguiente nivel y ofreciendo un nivel de emoción y profundidad sin igual.</p>
                            <Link to="https://www.eneba.com/steam-street-fighter-6-pc-steam-key-latam?enb_campaign=Main%20Search&enb_content=search%20dropdown%20-%20products&enb_medium=product%20card&enb_source=https%3A%2F%2Fwww.eneba.com%2Fsteam-mortal-kombat-11-steam-key-latam&enb_term=1" className="btn btn-primary">Go somewhere</Link>
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
        </>
    )
}
 export default Inicio