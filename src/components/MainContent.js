import React from "react";
import TodoItem from "./TodoItem"
import todoes from "./todoes"

function MainContent(){
    let timeOfDay = null;
    let date = new Date();
    let hours = date.getHours();
    if(hours < 6){
        timeOfDay = "morning";
    }else if(hours < 21){
        timeOfDay = "afternoon";
    }else{
        timeOfDay = "night";
    }
    
    const styles = {
        fontSize : "20px"
    }

    const todoesComponents = todoes.map(todoe => <TodoItem content = {todoe}/>)

    return(
        <main style = {styles} class="todolist">
            <div class="todolist__datetime">Hello, user! Good {timeOfDay}. </div>
            <span class="todolist__intro">Todo list:</span>
            <ol class="todolist__box">
                {todoesComponents}
            </ol>
        </main>
    )
}

export default MainContent;