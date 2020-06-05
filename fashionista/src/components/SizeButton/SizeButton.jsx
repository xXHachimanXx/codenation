import React from 'react';

import "./SizeButton.css";

const SizeButton = ({ size }) => (
    <button className="sizeButton">
        {size}
    </button>
);

export default SizeButton;