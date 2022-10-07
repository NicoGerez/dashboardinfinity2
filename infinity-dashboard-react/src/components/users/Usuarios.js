import React, { useEffect, useState } from "react";
import './Usuarios.css'


export default function Usuarios(){
    const [loading, setLoading] = useState(true);
    const [error,setError] = useState(null);
    const [data, setData] = useState(null);
    useEffect(() => {
        fetch('http://localhost:3030/api/users/')
        .then(response => {
            if(response.ok) {
                return response.json()
            }
            throw response;
        }).then(data => setData(data))
        .catch(error => {
            console.log("error" + error)
            setError(error)})
            .finally(() => setLoading(false))
    },[]);
    if (loading) { return (
        <h1>Cargando...</h1>
    )}
    if (error){ return(
        <p>Error!</p>
    )}
    console.log(data);
    return(
        <div className="users">
            <p className="user-title">Cantidad de usuarios: {data.total}</p>    
            <a href="http://localhost:3030/users/usersList"><button className="boton">Lista de Usuarios</button></a>
        </div>
    )
}