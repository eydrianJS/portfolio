import React, { Component } from 'react';
import Task from './Task'

const TaskList = props => {
    const tasks = props.tasks.map(item => (
        <Task key={item.id} task={item} />
    ));
    return ( 
        <>
        <div>
            <h2>Zadanie do zrobienia</h2>     
            {tasks} 
        </div>
        <div>
            <h2>Zadanie zrobione</h2>

        </div>
        </>
     );
}
 
export default TaskList;