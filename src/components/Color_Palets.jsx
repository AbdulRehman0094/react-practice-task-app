import React, { useContext, useState } from "react";
import "./Palette.css"; 
import context from "./context/Context";

const Palette = ({ colors, onSelect }) => {
  const [selectedColor, setSelectedColor] = useState(null);

  const handleColorClick = (color) => {
    setSelectedColor(color);
    onSelect(color);
  };
  const color1= useContext(context)
  return (
    <div className="palette" >
      {colors.map((color, index) => (
        <div
          key={index}
          className={`color ${color === selectedColor ? 'selected' : ''}`}
          style={{ backgroundColor: color }}
          onClick={() => handleColorClick(color)}
        ></div>
      ))}
    </div>
  );
};

export default Palette;
