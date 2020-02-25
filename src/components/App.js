import React from "react";
import Header from "./Header";
import MainContent from "./MainContent.js";
import Footer from "./Footer";
import todoData from "./todoData"

class App extends React.Component{
    constructor(){
        super();
        this.state = {
            jsonData: todoData
        }
    }

    render() {
        return(
            <div>
                <Header />
                <MainContent todoData = {this.state.jsonData}/>
                <Footer />
            </div>
        )
    }
}

export default App;