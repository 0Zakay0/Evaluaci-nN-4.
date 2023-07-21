import React, {useState, useEffect} from "react";
import { Link } from "react-router-dom";
import articuno from '../assets/imagenes/144.png'
import kabutops from '../assets/imagenes/141.png'
import PokemonFragment from "./Fragment/PokemonFragment";
const Pokemon = () => {

    return(
        <>
        <h1>Esta funcionando la ruta "pokedex</h1>
        <h2>Apuntando al componente pokemon</h2>
        <Link to="/recomienda">Recomendaciones</Link>
        <div className="row">
            <div className="col-4">
                <PokemonFragment 
                    textoDescripcion={"This legendary bird Pokémon can create blizzards by freezing moisture in the air."}
                    imagen={articuno}
                    titulo={"Articuno"}
                />
                
            </div>
            <div className="col-4">
                <PokemonFragment 
                    textoDescripcion={"Kabutops slices its prey apart and sucks out the fluids. The discarded body parts become food for other Pokémon."}
                    imagen={kabutops}
                    titulo={"Kabutops"}
                />
            </div>


        </div>
        
        
        </>
    )
}
export default Pokemon 