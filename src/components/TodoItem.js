import React from "react"

function TodoItem(props){
    return(
        <li class="todolist__element">
            {props.content.todoText ? props.content.todoText : "Empty todoe text"}
            <input type="checkbox"/>
        </li>
    )
}

export default TodoItem