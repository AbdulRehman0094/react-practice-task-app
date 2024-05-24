import React from 'react'
import '../App.css'
const Box = ({ id, onClick, color }) => {
    return (
      <div
        className="box" 
        style={{ backgroundColor: color }}
        onClick={() => onClick(id)}
      ></div>
    );
  };

  export default Box