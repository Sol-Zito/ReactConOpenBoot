import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Task } from '../../models/task.class';

import '../../style/task.css';

const TaskComponent = ({ task }) => {

    useEffect(() => {
        console.log('task created');

        return () => {
            console.log(`task: ${task.name} is going to unmount`);
        }
    }, [task]);

    return (

        <tr className='fw-normal'>
        
            <th className='ms-2'>
                <span > {task.name} </span>
            </th>

            <td className='aling-middle'>
                <span > {task.description} </span>
            </td>

            <td className='aling-middle'>
                {/* to do: sustituir por un badge */}
                <span > {task.level} </span>
            </td>

            <td className='aling-middle'>
                {/* to do: sustituir por iconos */}
                <span> {task.completed ? "Completed" : "No olvides realizarme"} </span>
            </td>

        </tr>





        // <div>
        //     <h2 className='task-name'>
        //         Nombre: {task.name}
        //     </h2>
        //     <h3>
        //         Description: {task.description}
        //     </h3>
        //     <h4>
        //         Level: {task.level}
        //     </h4>
        //     <h5>
        //         This task is : {task.completed ? "Completed" : "No olvides realizarme"}
        //     </h5>
        // </div>
    );

};

TaskComponent.propTypes = {
    task: PropTypes.instanceOf(Task)
};

export default TaskComponent;


