import React, { Component, useState } from 'react';
import Task from './Task'

const TaskList = props => {
    const [openAll, setOpenAll] = useState(false);

    const acitve = props.tasks.filter(item => (item.active));
    const done = props.tasks.filter(item => (!item.active));
    const acitveTasks = acitve.map(item => (
        <Task key={item.id} task={item} delete={props.delete} change={props.change}/>
    ))
    const doneTasks = done.map(item => (
        <Task key={item.id} task={item} delete={props.delete} change={props.change}/>
    ))
    return ( 
        <>
        <div>
            <h2>Zadanie do zrobienia </h2>     
            {acitveTasks.length > 0? acitveTasks : <p>Brak aktywnych zadań do zrobienia</p> }
        </div>
        <div>
            <h2>Zadanie zrobione ({doneTasks.length})</h2>
            {openAll? 
                doneTasks : 
                    doneTasks.length > 0? 
                        doneTasks.slice(0,5) : 
                            <p>Brak zrobionych zadań</p>}
            {doneTasks.length > 5? <p style={{cursor: 'pointer'}} onClick={()=>setOpenAll(!openAll)}>{!openAll? "rozwiń..." : "zwiń"}</p>: false}
        </div>
        </>
     );
}
 
export default TaskList;