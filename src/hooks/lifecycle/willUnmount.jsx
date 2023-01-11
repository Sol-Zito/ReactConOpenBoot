/**Ejemplo del ciclo de vida en componente clase */
import React, { Component, useEffect } from 'react'

export class WillUnmount extends Component {
    componentWillUnmount(){
        console.log('Comportamiento antes de que el componente se elimine');
    }
    
    render() {
    return (
      <div>
        <h1>
            WillUnmount
        </h1>
      </div>
    )
  }
}




/**Ejemplo del ciclo de vida en componente funcional */

export const WillUnmountHook = () => {

    useEffect( ()=>{
        //aqui no se pone nada
        return() => {
          console.log('Comportamiento antes de que el componente se elimine');
        }
    }, []);

  return (
    <div>
       <h1>
        WillUnmountHook
        </h1>
    </div>
  )
}

