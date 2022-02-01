import React from "react";
import Board from "./Board";
import { calculateWinner } from "./helper";
import Header from "./Header";
import "./style.css";



// const styles={
//     width:'400px',
//     margin:'70xp 750px',
    
// }
const Game=()=>{

    const [board,setBoard]=React.useState(Array(9).fill(null));
    const[xIsNext,setXisNext]=React.useState(true);
    const winner=calculateWinner(board)

    const handleClick=i=>{
        const boardCopy=[...board];
        if(winner || boardCopy[i]) return;

        boardCopy[i]=xIsNext?'X':'O';
        setBoard(boardCopy);
        setXisNext(!xIsNext);
    }

    const renderMoves=()=>(
        <button style={{backgroundColor: "#FF0000",border:'4px solid dark blue',
        borderRadius:'5px',color:'white'}} onClick={()=>setBoard(Array(9).fill(null))}>
            Start Game</button>
    )
    return (
        <div>
<Header />
        <Board squares={board} onClick={handleClick}/>
        <div style={{margin:'-90px 710px',height:'0px',width:'400px'}}>
            <p><b>{winner?'Winner:'+ winner:'Next Player: '+(xIsNext?'X':'O')}</b></p>
            {renderMoves()}
            </div>
        </div>
    )
}

export default Game;