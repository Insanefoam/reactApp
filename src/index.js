import React from "react"
import ReactDom from "react-dom"

function MyApp(){
    return (
    <div>
        <h1>Hello, my name is Daniil</h1>
        <p>I'm 20 years old and i'm a student. I learning in OmSTU</p>
        <ol>
            Languages that I learned
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
        </ol>
    </div>
    )
}

ReactDom.render(<MyApp />, document.getElementById("root"));