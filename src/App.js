import React, {useEffect, useState} from "react";
import { Route, Routes, Link } from "react-router-dom"
import Inicio from "./component/Inicio";
import Perfil from "./component/Perfil";
const App = () => {
  return (
    <>
    <Routes>
      <Route path="/" element={<Inicio />}/>
      <Route path="/perfil" element={<Perfil />}/>
    </Routes>
    </>
  )
}

export default App;
