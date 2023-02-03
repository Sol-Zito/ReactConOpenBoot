/**Ejemplo del ciclo de vida en componente clase */
import React, { Component, useEffect } from 'react'

export class Didmount extends Component {
    componentDidMount(){
        console.log('Comportamiento antes de que el componente sea añadido al DOM (renderice)');
    }
    
    render() {
    return (
      <div>
        <h1>
            Didmount
        </h1>
      </div>
    )
  }
}




/**Ejemplo del ciclo de vida en componente funcional */

export const DidmountHook = () => {

    useEffect( ()=>{
        console.log('Comportamiento antes de que el componente sea añadido al DOM (renderice)');
        //los [] van dado que solo se ejecutara una vez
    }, []);

  return (
    <div>
       <h1>
            DidmountHook
        </h1>
    </div>
  )
}

