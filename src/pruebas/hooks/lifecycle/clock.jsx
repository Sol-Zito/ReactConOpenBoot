import React, { useState, useEffect } from 'react';
import '../../styles/clock.scss';

export const clock = () => {

    const defaultUser = {
        fecha: new Date(),
        edad: 0,
        nombre: "",
        apellido: "",
    }

    const [user, setUser] = useState(defaultUser);

    // const [fecha, setFecha] = useState(new Date());
    // const [edad, setEdad] = useState(0);
    // const [nombre, setNombre] = useState('sol');
    // const [apellido, setApellido] = useState('lomas');

    useEffect (() => {

        const timerID = setInterval(
            () => changeStates(), 1000
        );

        return (() => {
            clearInterval(timerID);
        })

    })

    let changeStates = () => {
        // setEdad(edad + 1);
        // return {
        //     nombre,
        //     apellido,
        //     fecha: new Date(),
        //     edad
        // }
        return setUser({
            fecha: user.fecha,
            edad: user.edad +1,
            nombre: user.nombre,
            apellido: user.apellido,
        });

    }

    return (
        <div>
            <h2> Hora Actual:
                {user.fecha.toLocaleTimeString()}
            </h2>
            <h3> {user.nombre} {user.apellido} </h3>
            <h1> Edad: {user.edad} </h1>
        </div>
    );

}
