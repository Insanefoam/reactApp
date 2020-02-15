import React from "react"

function Header(){
    return(
        <header>
            <img src="https://cdn.worldvectorlogo.com/logos/tiktok-logo.svg" alt="Logo" class="logo__image"></img>
            <span class="logo__name"><a href="">Todo site</a></span>
            <nav class="navbar">
                <ul class="navbar__wraper">
                    <li class="navbar__element"><a href="">Main</a></li>
                    <li class="navbar__element"><a href="">About</a></li>
                    <li class="navbar__element"><a href="">Log in</a></li>
                </ul>
            </nav>
        </header>
    )
}

export default Header;