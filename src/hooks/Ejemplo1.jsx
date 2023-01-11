/**Ejemplo de uso del Hook useState
 * 
 * Crear un componente de tipo funcion y acceder a su estado privado a travez de un hook 
 * y ademas, poder modificarlo 
 */

import React, {useState} from 'react'

const Ejemplo1 = () => {
    const valorInicial = 0;

    const PersonaInicial = {
        name: 'Martin',
        email: 'martin@gmail.com'
    };

    /**valorinicial y personainicial seran estados del componente por lo cual se deberan 
     * ver reflejados en el mismo, incluido los cambios de los mismos */

    const [contador, setContador] = useState(valorInicial)
    const [persona, setPersona] = useState(PersonaInicial)
    
    /**funcion para actualizar el estado privado del contador */

    function incrementarContador() {
        setContador(contador + 1)
    }
    
    /**funcion para actualizar el estado de la persona */

    function actualizarPersona() {
        setPersona({
            name: 'pepe',
            email: 'pepe@gmail.com'
        })
    }

  return (
    <div>
        <h1>
            ***Ejemplo de estate**
        </h1>
        <h2>
            Contador: {contador}
        </h2>
        <h2>
            Datos de la persona:
        </h2>
        <h3>
            Nombre: {persona.name}
        </h3>
        <h3>
            Email: {persona.email}
        </h3>
        <div>
            <button onClick={incrementarContador}>
                Incrementar Contador
            </button>
        </div>
        <div>
            <button onClick={actualizarPersona}>
                Actualizar Persona
            </button>
        </div>
      
    </div>
  )
}

export default Ejemplo1
