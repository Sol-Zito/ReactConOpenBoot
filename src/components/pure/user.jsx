import React from 'react';
import PropTypes from 'prop-types';
import User from '../../models/user.class';

const UserComponent = ({ user}) =>{
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
                This user is : { user.conected ? "Contacto En Línea" : "Contacto No Disponible"}
            </h5>
        </div>
    );
}

UserComponent.propTypes = {
    user: PropTypes.instanceOf(User)
}

export default UserComponent;