import React, {useEffect, useState} from "react";
import { Link } from "react-router-dom";
const Ejercicio = () =>{
    const [obtNumero,setObtNUmero] = useState(0)
    const [obtCalculo,setObtCalculo] = useState(0)
    const handleNumeros =(evento) =>{
        setObtNUmero(evento.target.value)    
    }
    const handleCalcular= () =>{
        const A=0
        const B= obtNumero
        const resultado=0
        for (let i = A; i <= B; i++) {
            resultado= B*(A+1)
        }
        setObtCalculo(resultado)
            
    }
        

    return(
        <>
            <h1>Ejercicio</h1>
            <labe html="numero">Número</labe>
            <input type="text" name="numero" placeholder="Ingrese el número " onChange={handleNumeros}/>
            <button type="button" onClick={handleCalcular}>Calcular Factorial</button>
            <p>El factorial de{obtNumero} es {obtCalculo} </p>
            <Link to="/perfil"> perfil</Link><br></br>
        </>
        
        
    )
    }
export default Ejercicio