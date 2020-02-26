import React from "react"

class TodoItem extends React.Component{
    constructor(props){
        super();
        this.state = {
            todoText: props.content.todoText,
            checkState: props.content.checkState,
            todoTextStyle: {
                textDecoration: props.content.checkState ? 'line-through' : 'none'
            }
        }
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(){
        this.setState(prevState =>{
            let style = (prevState.checkState ? 'none' : 'line-through');
            let checkStatus = (prevState.checkState ? false : true);
            prevState = {
                todoText: prevState.todoText,
                checkState: checkStatus,
                todoTextStyle: {
                    textDecoration: style
                }
            }
            return prevState;
        });
    }

    render(){
            return(
            <li class="todolist__element">
                <span style={this.state.todoTextStyle}>
                    {this.state.todoText ? this.state.todoText : "Empty todoe text"}
                </span>
                <input type="checkbox" defaultChecked={this.state.checkState} onClick={this.handleClick}/>
            </li>
        )
    }
}

export default TodoItem