import React from 'react';
import SlideCard from '../poker/slider';

const BgBlur = () => {
  const containerStyle = {
    backgroundColor: 'transparent',
    height: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
    overflow: 'hidden',
    color: 'white',
    fontFamily: 'Arial, sans-serif',
  };

  const blurStyle = {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '30%', // Cover the entire height
    background: 'linear-gradient(to bottom, rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0))',
    filter: 'blur(10px)', // Adjust blur intensity
    zIndex: 1,
  };

  const contentContainerStyle = {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '30%', // Adjust height as needed
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 2,
  };

  return (
    <div style={containerStyle}>
      <div style={blurStyle}></div>
      <div style={contentContainerStyle}>
        <SlideCard />
      </div>
    </div>
  );
};

export default BgBlur;
