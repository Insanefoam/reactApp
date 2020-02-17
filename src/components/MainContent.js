import React from "react";

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

    return(
        <main style = {styles} class="todolist">
            <div class = "todolist__datetime">Hello, user! Good {timeOfDay}. </div>
            <span class="todolist__intro">Todo list:</span>
            <ol class="todolist__box">
                <li class="todolist__element">First todo <input type="checkbox"/></li>
                <li class="todolist__element">Second todo <input type="checkbox"/></li>
                <li class="todolist__element">Third todo <input type="checkbox"/></li>
                <li class="todolist__element">Fourth todo <input type="checkbox"/></li>
            </ol>
        </main>
    )
}

export default MainContent;