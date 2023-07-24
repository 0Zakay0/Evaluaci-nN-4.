import React, {useEffect, useState} from "react";
import { Route, Routes, Link } from "react-router-dom"
import QuienesSomos from "./component/QuienesSomos";
import Inicio1 from "./component/Inicio1"
import Compra from "./component/Compra"
import Rembolso from "./component/Rembolso";

const App = () => {
  return (
    <>
    <Routes>
      <Route path="/" element={<Inicio1 />}/>
      <Route path="/compra" element={<Compra/>}/>
      <Route path="/quienesSomos" element={<QuienesSomos />}/>
      <Route path="/rembolso" element={<Rembolso />}/>
    </Routes>
    </>
  )
}

export default App;
