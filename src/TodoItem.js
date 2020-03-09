import React from "react"

function TodoItem (props){
	return (
		// need <div> because more than 2 elements
	<div className = "todo-item"> 		
		<input type = "checkbox" checked= {props.item.completed} /> 
		<p>{props.item.text}</p>
	</div>
	)
}

export default TodoItem