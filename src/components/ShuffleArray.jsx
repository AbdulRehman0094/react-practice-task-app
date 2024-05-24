import React, { useState, useEffect } from "react";

const ShuffleArray = () => {
  const [array, setArray] = useState(['red', 'blue', 'green', 'black', 'green', 'purple']);

  const shuffleArray = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  };

  useEffect(() => {
    const newArray = shuffleArray([...array]);
    setArray(newArray);
  }, []);


  return (
    <div>
      {array.map((color, index) => (
        <div
          className="box"
          style={{ backgroundColor: color }}
          key={index}
        >
          
        </div>
      ))}
    </div>
  );
};

export default ShuffleArray;
