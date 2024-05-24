import React from 'react'
import { useState,useEffect } from 'react';
import Box from './Box.jsx'
import '../App.css'


const Box_Color_Task = () => {
    const [boxColors, setBoxColors] = useState(Array(7).fill('yellow'));
  const [clickedBoxes, setClickedBoxes] = useState([]);

  const handleClick = (id) => {
    const updatedColors = [...boxColors];
    updatedColors[id] = 'green';
    setBoxColors(updatedColors);
    setClickedBoxes([...clickedBoxes, id]);
  };

  useEffect(() => {
    if (clickedBoxes.length === 7) {
      const revertColors =  () => {
        for (let i = 0; i < 7; i++) {
        //   await new Promise((resolve) => setTimeout(resolve, 1000));
          const updatedColors = [...boxColors];
          updatedColors[[...clickedBoxes[i]]] = 'yellow';
          setBoxColors(updatedColors);
        }
        setClickedBoxes([]);
      };
      revertColors();
    }
  }, [clickedBoxes, boxColors]);
  return (
    <div className="container">
    {boxColors.map((color, index) => (
      <Box
        key={index}
        id={index}
        color={color}
        onClick={(id) => handleClick(id)}
      />
    ))}
  </div>  )
}

export default Box_Color_Task