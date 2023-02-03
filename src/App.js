import logo from './logo.svg';

// importar boostrap
import 'bootstrap/dist/css/bootstrap.css';

//debajo de bootstrap debe ir el estilado propio para que no se pisen(cascada)

import './App.css';
import Greeting from './components/pure/greeting';
import GreetingF from './components/pure/greetingF';
import UserContainer from './user/components/container/user_container';
import MiComponenteConContexto from './hooks/Ejemplo3';
import Ejemplo4 from './hooks/Ejemplo4';
import GreetingStyled from './components/pure/greetingStyled';
import TaskListComponent from './task/components/container/task_list';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        
        {/* Componente del greeting.jsx

        <Greeting name="Sol"></Greeting> */}

        {/* Componenente del Greeting funcional 
        <GreetingF name="Sol"></GreetingF>*/}

        {/* Componente de listado de tareas  */}
        <TaskListComponent></TaskListComponent>

        {/* Componente de User 
        <UserContainer></UserContainer>*/}

        {/* <MiComponenteConContexto> </MiComponenteConContexto>

        <Ejemplo4></Ejemplo4> */}

        {/* <GreetingStyled name='Sol'>

        </GreetingStyled> */}

      </header>
    </div> 
  );
}

export default App;
