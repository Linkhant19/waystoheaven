import React from 'react';
import './GridItem.css';

// griditem component for all my images !!!
// they will become clickable later and I will add navigation. 

const GridItem = ({ image, altText, overlayText }) => {
  return (
    <div className="grid-item">
      <img src={image} alt={altText} />
      {overlayText && <div className="overlay">{overlayText}</div>}
    </div>
  );
};

export default GridItem;
