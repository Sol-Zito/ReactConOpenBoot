// funcion
// no cuneta ni con props ni con state
//por ende debe de tener un hooks
//las props se definen manualmente

import React, {useState} from 'react'
import PropTypes from 'prop-types'

const GreetingF = (props) => {
    //Hook
    //Breve intro a useState
    //const [variable, metodoParaActualizar] = useState(valorInicial);
    const [age, setAge] = useState(24);

    const birthday = () => {
        //actualiza edad
        setAge(age + 1 )
    }

  return (
    <div>
        <h1>
            Hola {props.name} desde componente funcional!
        </h1>
        <h2>
            Tu edad es de:  { age } 
        </h2>
        <button onClick={birthday}>
            Cumplir años
        </button>
        
      </div>
  )
}

GreetingF.propTypes = {
    name: PropTypes.string,
}

export default GreetingF;
