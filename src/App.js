import logo from './logo.svg';
import './App.css';
import Greeting from './components/pure/greeting';
import GreetingF from './components/pure/greetingF';
import TaskListComponent from './components/container/task_list';
import UserContainer from './components/container/user_container';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        
        {/* Componente del greeting.jsx

        <Greeting name="Sol"></Greeting> */}

        {/* Componenente del Greeting funcional 
        <GreetingF name="Sol"></GreetingF>*/}

        {/* Componente de listado de tareas 
        <TaskListComponent></TaskListComponent>*/}

        {/* Componente de User */}
        <UserContainer></UserContainer>

      </header>
    </div> 
  );
}

export default App;
