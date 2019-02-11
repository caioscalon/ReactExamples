import React, {Component} from "react";

interface IProps {
    item: {
        id: number,
        text: string,
        completed: boolean,
    },
    handleChange(id: number): void,
}

function ToDoItem(props: IProps) {
    return (
        <div className="todoitem">
            <input 
                type="checkbox" 
                checked={props.item.completed} 
                onChange={() => props.handleChange(props.item.id)}
            />
            <p> {props.item.text} </p>
        </div>
    );
}

export default ToDoItem;