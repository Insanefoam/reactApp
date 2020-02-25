import React from "react"

class TodoItem extends React.Component{
    constructor(props){
        super();
        this.state = {
            todoText: props.content.todoText,
            todoTextStyle: {
                textDecoration: "none"
            },
            checkState: props.content.checkState
        }
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(){
        //this.setState({todoText: "dwadwa", checkState: true});
        this.setState(prevState =>{
            let newState = {
                todoText: prevState.todoText,
                todoTextStyle: {
                    textDecoration: "line-through"
                },
                checkState: prevState.checkState
            }
            return newState;
        })
    }

    render(){
            return(
            <li class="todolist__element">
                <span style={this.state.todoTextStyle}>
                    {this.state.todoText ? this.state.todoText : "Empty todoe text"}
                </span>
                <input type="checkbox" checked={this.state.checkState} onClick={this.handleClick}/>
            </li>
        )
    }
}

export default TodoItem