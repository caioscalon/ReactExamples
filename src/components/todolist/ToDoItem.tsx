import React, {Component} from "react";

interface IProps {
    item: {
        id: number,
        text: string,
        completed: boolean,
    },
    handleChange: (id: number, event: React.FormEvent<HTMLInputElement>) => void,
}

function ToDoItem(props: IProps) {
    return (
        <div className="todoitem">
            <input 
                type="checkbox" 
                checked={props.item.completed} 
                onChange={(event) => props.handleChange(props.item.id, event)}
            />
            <p> {props.item.text} </p>
        </div>
    );
}

export default ToDoItem;