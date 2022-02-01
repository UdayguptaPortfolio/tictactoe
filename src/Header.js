import React from "react";
import "./style.css"
export default function Header()
{
    return(
        <header className="header">
            <img 
            src="logo-tictac.png"
            className="header--image"/>
            <h2 className="header--title">Tic Tac Toe </h2>
            <h2 className="header--project">
                First Game
            </h2>
            </header>
    )
}