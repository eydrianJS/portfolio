import React, { Component } from "react";
import AddTask from "./AddTask";
import TaskList from "./TaskList";

class ToDoList extends Component {
  constructor(props) {
    super(props);
    this.counter = 6;
    this.state = {
      tasks: [
        {
          id: 0,
          text: "adasdas",
          date: "2018-02-15",
          important: true,
          active: true,
          finishDate: null
        },
        {
          id: 1,
          text: "dsfdsfffffffffffffff",
          date: "2019-05-13",
          important: true,
          active: true,
          finishDate: null
        },
        {
          id: 2,
          text: "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
          date: "2018-01-11",
          important: false,
          active: true,
          finishDate: null
        },
        {
          id: 3,
          text: "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
          date: "2018-01-11",
          important: false,
          active: true,
          finishDate: null
        },
        {
          id: 4,
          text: "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
          date: "2018-01-11",
          important: false,
          active: true,
          finishDate: null
        },
        {
          id: 5,
          text: "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
          date: "2018-01-11",
          important: false,
          active: true,
          finishDate: null
        }
      ]
    };
  }

  deleteTask = id => {
    let tasks = [...this.state.tasks];
    tasks = tasks.filter(item => item.id !== id);
    this.setState({
      tasks
    });
  };

  changeTaskStatus = id => {
    const tasks = [...this.state.tasks];
    tasks.forEach(item => {
      if (item.id === id) {
        item.active = false;
        item.finishDate = new Date().getTime();
      }
    });
    this.setState({
      tasks
    });
  };

  addtask = ({text, date, important} ) => {
    const task = {
      id: this.counter,
      text: text,
      date: date,
      important: important,
      active: true,
      finishDate: null
    };
    this.counter++;
    this.setState( prevState => ({
        tasks: [...prevState.tasks, task]
    }))
    return true;
  };

  render() {
    return (
      <div className="todoapp">
        <h1>TODO APP</h1>
        <AddTask add={this.addtask} />
        <TaskList
          tasks={this.state.tasks}
          delete={this.deleteTask}
          change={this.changeTaskStatus}
        />
      </div>
    );
  }
}

export default ToDoList;
