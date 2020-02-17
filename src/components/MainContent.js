import React from "react";

function MainContent(){
    let timeOfDay = null;
    let date = new Date();
    let hours = date.getHours();
    if(hours < 6){
        timeOfDay = "morning";
    }else if(hours < 21){
        timeOfDay = "day";
    }else{
        timeOfDay = "night";
    }
    
    const styles = {
        color: "red"
    }

    return(
        <main style = {styles}>
            <div>Hello, user! Good {timeOfDay}. </div>
            <span>Todo list:</span>
            <ol>
                <li>First todo <input type="checkbox"/></li>
                <li>Second todo <input type="checkbox"/></li>
                <li>Third todo <input type="checkbox"/></li>
                <li>Fourth todo <input type="checkbox"/></li>
            </ol>
        </main>
    )
}

export default MainContent;