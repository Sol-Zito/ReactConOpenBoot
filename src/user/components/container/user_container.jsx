import React from 'react';
import User from '../../models/user.class';
import UserComponent from '../pure/user';


const UserContainer = () =>{
    const defaultUser = new User('Sol', 'Zito', 'solzito@gmail.com', false)

    return(
        <div>
            <div>
                <h1>
                    User: 
                </h1>
            </div>
            <UserComponent user={defaultUser}> </UserComponent>
            
        </div>
    );
}


export default UserContainer;