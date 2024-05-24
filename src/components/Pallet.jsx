import React, { useState } from "react";
import Palette from "./Color_Palets";
const ClrPalt = ({selectedColor,setSelectedColor}) => {

  const handleColorSelect = (color) => {
    setSelectedColor(color);
  };
  const colors = ["red", "blue", "green", "yellow", "purple"];

  return (
    <div>
      <h1>Color Palette</h1>
      <Palette colors={colors} onSelect={handleColorSelect} />
      <p>Selected Color: {selectedColor}</p>
    </div>
   
  );
};

export default ClrPalt;
