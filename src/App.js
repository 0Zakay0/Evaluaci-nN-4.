import React, {useEffect, useState} from "react";
import { Route, Routes, Link } from "react-router-dom"
import Inicio from "./component/Inicio";
import Perfil from "./component/Perfil";
import Ejercicio from "./component/Ejercicio";
import Pokemon from "./component/Pokemon";
import Recomendaciones from "./component/Recomendaciones";

const App = () => {
  return (
    <>
    <Routes>
      <Route path="/" element={<Inicio />}/>
      <Route path="/perfil" element={<Perfil />}/>
      <Route path="/ejercicio" element={<Ejercicio />}/>
      <Route path="/pokedex" element={<Pokemon/>}/>
      <Route path="/recomienda" element={<Recomendaciones/>}/>
    </Routes>
    </>
  )
}

export default App;
