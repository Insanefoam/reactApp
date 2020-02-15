import React from "react";

function MainContent(){
    return(
        <main>
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