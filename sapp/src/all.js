import React, { useState } from 'react';
import './all.css';

const RoundedRectangle = ({ imageUrl, soundEffect }) => {
  const [isFullSize, setFullSize] = useState(false);

  const playSoundEffect = () => {
    const audio = new Audio(soundEffect);
    audio.play();
  };

  const handleClick = () => {
    setFullSize(true);

    // Automatically return to original size after 1 seconds
    setTimeout(() => {
      setFullSize(false);
    }, 1000);
  };  
  const Click = () => {
    playSoundEffect();

  };

  const imageSize = isFullSize ? { width: '100%', height: '100%' } : {};

  return (
    <div className='rectangleStyle' onMouseOver={handleClick} onClick={Click} >
      <img className='img-style' src={imageUrl} alt="" style={imageSize} />
    </div>
  );
};

export default RoundedRectangle;
