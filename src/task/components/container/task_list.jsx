import React, { useEffect, useState } from 'react';
import { Task } from '../../models/task.class';
import { LEVELS } from '../../models/levels.enum';
import TaskComponent from '../pure/task';



const TaskListComponent = () => {

    const defaultTask = new Task('Example', 'Default description', false, LEVELS.NORMAL);
    const [tasks, setTasks] = useState([defaultTask]);

    const [loading, setLoading] = useState(true);

    console.log('cambiar el estado de la tarea');

    // Control del ciclo de vida del componente
    useEffect(() => {
        console.log('Task State has been modified');
        setLoading(false);
        return () => {
            console.log('TaskList component is going to unmount...')
        }
    }, [tasks])

    const changeCompleted = (id) => {
        console.log('TODO: Cambiar estado de una tarea')
    }


    return (
        <div>
            <div className='col-12'>
                <div className='card'>
                    <div className='card-header p-3'>
                        <h5>
                            Your task:
                        </h5>
                    </div>
                    <div className='card-body ' style={{ position: 'relative', height: '400px' }}
                        data-mdb-perfect-scrollbar='true'>
                        <table>
                            <thead>
                                <tr>
                                    {/* //table raw */}
                                    <th scope='col' > Title </th>
                                    <th scope='col' > Description </th>
                                    <th scope='col' > Priority </th>
                                    <th scope='col' > Actions </th>
                                </tr>
                            </thead>
                            <tbody>
                                {/* To do: iterar sobre una lista de tareas */}
                                <TaskComponent task={defaultTask}></TaskComponent>
                            </tbody>
                        </table>
                    </div>
                </div>

            </div>
            {/* To do: Aplicar un For/Map para renderizar una lista */}
            {/* <TaskComponent task={defaultTask}></TaskComponent> */}
        </div>
    );
}


export default TaskListComponent;