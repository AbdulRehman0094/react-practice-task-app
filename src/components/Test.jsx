import React, { useState, useEffect, useContext } from "react";
import "../App.css";
import context from "./context/Context";

const Test = () => {
  const [colors, setColors] = useState(Array(5).fill("yellow"));

  const [selectedDiv, setSelectedDiv] = useState([]);
  const colorscheme = useContext(context);

  const func = (index) => {
    const update = [...colors];
    update[index] = "green";
    setColors(update);
    setSelectedDiv((prevSelectedDiv) => [...prevSelectedDiv, index]);
  };

  useEffect(() => {
    if (selectedDiv.length === 5) {
      const revert = async () => {
        for (let i = 0; i < 5; i++) {
          await new Promise((resolve) => setTimeout(resolve, 1000));
          const update = [...colors];
          update[selectedDiv[i]] = "yellow";
          setColors(update);
        }
        setSelectedDiv([]);
        setColors(Array(5).fill("yellow"));
      };

      revert();
    }
  }, [selectedDiv]);

  return (
    <>
      <div className="container" style={{ backgroundColor: colorscheme }}>
        {colors.map((color, index) => (
          <div
            className="box"
            style={{ backgroundColor: color }}
            onClick={() => func(index)}
            key={index}
          >
            Hi
          </div>
        ))}
      </div>
    </>
  );
};

export default Test;
