import React, { useState } from 'react'

//definiendo estilos en constantes

// ? Estilo para usuario logeado
const loggedStyle = {
  color: 'blue',
  fontWeight: 'bold'
}

const unloggedStyle = {
  color: 'tomato',
  fontWeight: 'bold'
}

const GreetingStyled = (props) => {

  const [logged, setLogged] = useState(false);

  return (
    <div style={logged ? loggedStyle : unloggedStyle}>
      {logged ? (<p>Hi, {props.name}</p>) : (<p> Please, loggin</p>)}

      <button onClick={() => {
        console.log('bton pulsado');
        setLogged(!logged)}}>

        {logged ? 'Logout' : 'Login'}
        
      </button>
    </div>
  )
}

export default GreetingStyled
