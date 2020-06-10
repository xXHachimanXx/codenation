import React, { useState } from 'react';

import "./SizeButton.css";

const SizeButton = ({ size }) => {

  // Temporario
  const [clicked, setClicked] = useState(false);

  return (
    <>
    <button
      className={clicked ? "onClick" : "sizeButton"}
      onClick={() => setClicked(!clicked)}
    >
      {size}
    </button>
    </>
  );
}

export default SizeButton;