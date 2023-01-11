import PropTypes from 'prop-types'

export default class User {
    name = '';
    lastname ='';
    email = '';
    conected = false ;

  
    
    constructor(name, lastname, email, conected){
        this.name = name;
        this.lastname = lastname;
        this.email = email;
        this.conected = conected;
    }
}


User.prototypes = {
  name: PropTypes.string,
  lastname: PropTypes.string,
  email: PropTypes.string,
  conected: PropTypes.bool,

}