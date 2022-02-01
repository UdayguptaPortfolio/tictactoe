import React from "react";
import Square from "./Square";
const styles={
    border:'4px solid dark blue',
    borderRadius:'10px',
    width:'250px',
    height:'250px',
    margin:'100 auto',
    display:'grid',
    gridTemplate:'repeat(3,1fr)/repeat(3,1fr)'
};
const Board=({squares,onClick})=>(
<div style={styles}>
    {squares.map((square,i)=>(
        <Square key={i} value={square} onClick={()=>onClick(i)} />
))}

</div>
)

export default Board;