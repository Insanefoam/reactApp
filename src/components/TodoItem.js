import React from "react"

function TodoItem(props){
    return(
        <li class="todolist__element">
            {props.content.todoText}
            <input type="checkbox"/>
        </li>
    )
}

export default TodoItem