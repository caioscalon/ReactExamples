import React, {Component} from "react";
import ToDoItem from "./ToDoItem";
import ToDoData from "./ToDoData";

interface IState {
    todos: {}[],
}

class ToDoList extends Component <{}, IState> {
    constructor() {
        super({});
        this.state = {
            todos: ToDoData,
        }
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(id: number) {
        this.setState(prevState => {
            const updatedToDo = prevState.todos.map((todo: any) => {
                if (todo.id === id) {
                    todo.completed = !todo.completed;
                }
                return todo;
            })
            return {
                todos: updatedToDo
            }
        });
    }

    render() {
        const todoItems = this.state.todos.map((item: any) => <ToDoItem item={item} handleChange={this.handleChange}/>)

        return (
        <div className="todolist">
            {todoItems}
        </div>
    );
    }
}

export default ToDoList;