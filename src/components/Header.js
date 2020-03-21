import React from "react"

class Header extends React.Component{
    constructor(){
        super();
        this.state = {
            logoUrl: 'https://cdn.worldvectorlogo.com/logos/tiktok-logo.svg',
            logoText: 'Todo site',
            loginStatus: true
        };
    }

    render() {
        return(
            <header>
                <img src={this.state.logoUrl} alt="Logo" class="logo__image"></img>
                <span class="logo__name"><a href="">{this.state.logoText}</a></span>
                <nav class="navbar">
                    <ul class="navbar__wraper">
                        <li class="navbar__element"><a href="">Main</a></li>
                        <li class="navbar__element"><a href="">About</a></li>
                        <li class="navbar__element"><a href="">{this.state.loginStatus ? "Log out" : "Log in"}</a></li>
                    </ul>
                </nav>
            </header>
        )
    }
}

export default Header;