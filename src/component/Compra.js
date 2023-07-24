import React, { useState,useEffect } from "react";
import "../CSS/Compra.css";
import { Link } from "react-router-dom";
const Inicio = () => {

    const [nombre, setNombre] = useState("");
    const [apellido, setApellido] = useState("");
    const [telefono, setTelefono] = useState("");
    const [correo, setCorreo] = useState("");
    const [tipoTarjeta, setTipoTarjeta] = useState("");
    const [datosTarjeta, setDatosTarjeta] = useState("");
    const [compraRealizada, setCompraRealizada] = useState(false);
    const handleSubmit = (e) => {
        e.preventDefault();

        setCompraRealizada(true);
    };

    return (
        <body className="body2"><section className="inicio1">
            <div className="inicio-container">
                <section className="realizacion-compra">
                    <h1>Realización de Compra</h1>

                </section>

                <section className="ingreso-datos">
                    <h2>Ingreso de Datos</h2>
                    <form onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label>Nombre:</label>
                            <input
                                type="text"
                                value={nombre}
                                onChange={(e) => setNombre(e.target.value)}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label>Apellido:</label>
                            <input
                                type="text"
                                value={apellido}
                                onChange={(e) => setApellido(e.target.value)}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label>Teléfono:</label>
                            <input
                                type="tel"
                                value={telefono}
                                onChange={(e) => setTelefono(e.target.value)}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label>Correo:</label>
                            <input
                                type="email"
                                value={correo}
                                onChange={(e) => setCorreo(e.target.value)}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label>Tipo de Tarjeta:</label>
                            <select
                                value={tipoTarjeta}
                                onChange={(e) => setTipoTarjeta(e.target.value)}
                                required
                            >
                                <option value="">Seleccionar</option>
                                <option value="credito">Crédito</option>
                                <option value="debito">Débito</option>
                            </select>
                        </div>
                        <div className="form-group">
                            <label>Datos de la Tarjeta:</label>
                            <input
                                type="text"
                                value={datosTarjeta}
                                onChange={(e) => setDatosTarjeta(e.target.value)}
                                required
                            />
                        </div>
                        <button type="submit">Realizar Compra</button>
                        <Link to="/" className="volver" >Volver al Inicio</Link>

                    </form>
                    <div className="completado">
                        {compraRealizada && (
                            <div className="mensaje-confirmacion">
                                <p className="compra">¡Compra realizada con éxito!</p>
                            </div>
                        )}
                    </div>

                </section>
            </div>
        </section>
        </body>
    );
};


export default Inicio;
