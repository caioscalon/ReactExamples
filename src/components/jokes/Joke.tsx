import React, {Component} from "react";

interface IProps {
    key: number,
    question?: string,
    punchLine: string,
}

function Joke(props: IProps) {
    return (
        // display: !props.question && "none"
        <div>
            <p style={{display: props.question ? "block" : "none"}}> <b>Question: </b>{props.question}</p>
            <p style={{color: !props.question ? "green" : "black"}}> <b>Answer: </b>{props.punchLine}</p>
            <hr></hr>
        </div>
    );
}

export default Joke;