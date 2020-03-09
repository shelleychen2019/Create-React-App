import React from "react"
import todosData from "./todosData"
import TodoItem from "./TodoItem"

//Version 4 Class-based components
class App extends React.Component {
	// put your own method here
	constructor(){
		super()
		this.state = {
			todos: todosData
		}
	}
	render() {
		const todoItems = this.state.todos.map(item =>
			<TodoItem key = {item.id} item= {item} />)
		
			return (
			<div className= "todo-list"> 
				{todoItems}
			</div>
			)
	}
}

// //Version 3 Class-based components
// class App extends React.Component {
// 	// put your own method here
// 	yourMethod(){
		
// 	}
// 	render() {
// 		// before the return: put here any code that determines what's in the display
// 		const style = this.yourMethod()
// 		const date = newDate();
// 		const todoItems = todosData.map(item =>
// 			<TodoItem key = {this.item.id} item= {this.item} />)

// 		// render will return what's in the functional component below
// 		return (
// 			<div className= "todo-list"> 
// 				{todosItems}
// 			</div>
//		)
// 	}
// }


// Version 2
// function App() {
// 	const todoItems = todosData.map(item =>
// 		<TodoItem key={item.id} item={item} />)

// 	return (
// 		<div className="todo-list">
// 			{todoItems}
// 		</div>
// 	)
// }

// // 	Version 1
// todoItems are entered manually
// //	return (
// // 	<div className = "todo-list">
// // 			<TodoItem />
// // 			<TodoItem />
// // 			<TodoItem />
// // 			<TodoItem />
// // 	</div>
// // )

export default App
