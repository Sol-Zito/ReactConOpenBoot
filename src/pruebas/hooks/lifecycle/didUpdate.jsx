/**Ejemplo del ciclo de vida en componente clase */
import React, { Component, useEffect } from 'react'

export class DidUpdate extends Component {
    componentDidUpdate(){
        console.log('Comportamiento antes de que el componente se actualice');
    }
    
    render() {
    return (
      <div>
        <h1>
            DidUpdate
        </h1>
      </div>
    )
  }
}




/**Ejemplo del ciclo de vida en componente funcional */

export const DidUpdateHook = () => {

    useEffect( ()=>{
        console.log('Comportamiento antes de que el componente se actualice');
        //va sin lo [] debido a que cada vez que se actualice pasara por el useEffect
    });

  return (
    <div>
       <h1>
        DidUpdateHook
        </h1>
    </div>
  )
}

