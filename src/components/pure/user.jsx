import React, { useState } from 'react';
import PropTypes from 'prop-types';
import User from '../../models/user.class';

const UserComponent = ({ user}) =>{
    
    const[estado , setEstado] = useState(user.conected);

    const changeState = () => {
        setEstado(!estado)

        console.log('cambio estado', estado);

        console.log('cambio conect', user.conected);
    }

    return(
        <div>
            <h2>
                Name: { user.name }
            </h2>
            <h3>
                Lastname: { user.lastname }
            </h3>
            <h4>
                Email: { user.email }
            </h4>
            <h5>
                This user is : { estado ? "Contacto En Línea" : "Contacto No Disponible"}
            </h5>
            <div>
                <button onClick={changeState}>
                    Cambiar estado
                </button>
            </div> 
        </div>
    );
}

UserComponent.propTypes = {
    user: PropTypes.instanceOf(User)
}

export default UserComponent;