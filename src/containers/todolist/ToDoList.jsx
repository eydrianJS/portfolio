import React, {Component} from 'react';
import AddTask from './AddTask'
import TaskList from './TaskList';

class ToDoList extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            tasks: [
                {
                    id: 0,
                    text: 'adasdas',
                    date: '2018-02-15',
                    impotant: true,
                    active: true,
                    finishDate: null,
                },
                {
                    id: 1,
                    text: 'dsfdsfffffffffffffff',
                    date: '2019-05-13',
                    impotant: true,
                    active: false,
                    finishDate: null,
                },
                {
                    id: 2,
                    text: 'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                    date: '2018-01-11',
                    impotant: false,
                    active: true,
                    finishDate: null,
                },
            ]
         }
    }
    render() { 
        return ( 
            <div className="todoapp">
            TODO APP
            <AddTask />
            <TaskList tasks={this.state.tasks}/>
        </div>
         );
    }
}
 
export default ToDoList;

