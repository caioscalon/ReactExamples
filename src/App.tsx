import React, { Component } from 'react';

import MainContent from "./components/pagecomponents/MainContent";
import Header from "./components/pagecomponents/Header";
import Footer from "./components/pagecomponents/Footer";

import ToDoList from "./components/todolist/ToDoList";
import ToDoItem from "./components/todolist/ToDoItem";
import ToDoData from "./components/todolist/ToDoData";

import ContactCard from './components/contactcard/ContactCard';

import Joke from "./components/jokes/Joke";
import JokesData from "./components/jokes/JokesData";

import Product from "./components/products/Product";
import ProductsData from "./components/products/ProductData";

class App extends Component {
	render() {
		return (
			<ToDoList />
		);
	}
}

export default App;

/* Logged
interface IState {
	isLoggedIn: boolean,
}

constructor(state: IState) {
	super(state);
	this.state = {
		isLoggedIn: false,
	}
}

render() {
	return (
		<div>
			<h1> You are currently logged {this.state.isLoggedIn ? "in" : "out"} </h1>
		</div>
	);
}
*/

/* Event Handler
interface IState {
	count: number,
}

constructor() {
	super({});
	this.state = {
		count: 0,
	}
	//this.handleClick = this.handleClick.bind(this);
}

handleClick(): any {
	this.setState(prevState => {
		return {
			count: prevState.count + 1,
		}
	});
}

render() {
	return (
		<div>
			<h1> {this.state.count} </h1>
			<button onClick={() => this.handleClick()}> Change! </button>
		</div>
	);
}
*/