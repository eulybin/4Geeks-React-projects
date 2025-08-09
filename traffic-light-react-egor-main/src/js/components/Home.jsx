import React, { useState, useEffect } from 'react';

const Home = () => {
  const [activeColor, setActiveColor] = useState('');
  const [toggleLights, setToggleLights] = useState(false);
  const [showPurpleLight, setShowPurpleLight] = useState(false);
  const colors = ['red', 'yellow', 'green', ...(showPurpleLight ? ['purple'] : [])];

  const handleClick = (e) => {
    const selectedColor = e.target.className.split(' ')[0].trim();
    setActiveColor((prevActiveColor) => (prevActiveColor === selectedColor ? '' : selectedColor));
  };

  useEffect(() => {
    if (toggleLights) {
      let currentIndex = 0;
      const interval = setInterval(() => {
        setActiveColor(colors[currentIndex]);
        if (currentIndex >= colors.length - 1) {
          currentIndex = 0;
        } else {
          currentIndex++;
        }
      }, 500);
      return () => clearInterval(interval);
    }
  }, [toggleLights, showPurpleLight]);

  // ------------ TOGGLE ALL LIGHTS  -------------
  const toggleAllLights = () => {
    setToggleLights((prevToggleLightsState) => !prevToggleLightsState);
  };

  // ------------ TOGGLE PURPLE LIGHT  -------------
  const togglePurpleLight = () => {
    setShowPurpleLight((prevPurpleLightState) => !prevPurpleLightState);
    const extendBody = document.querySelector('.traffic-light-body');
    if (!showPurpleLight) {
      extendBody.style.height = '500px';
    } else {
      extendBody.style.height = '375px';
    }
  };

  return (
    <div className=' d-flex justify-content-center flex-column align-items-center'>
      <div onClick={handleClick} className='traffic-light-body pt-2'>
        {colors.map((color, index) => {
          return <div key={index} className={`${color} light ${activeColor === color ? 'selected' : ''}`}></div>;
        })}
      </div>
      <div className='traffic-light-stick'></div>
      <div className='buttons-div'>
        <button onClick={toggleAllLights} className='mx-2 btn btn-primary btn-lg'>
          Toggle Lights
        </button>
        <button onClick={togglePurpleLight} className='mx-2 btn btn-secondary btn-lg'>
          Toggle Purple
        </button>
      </div>
    </div>
  );
};

export default Home;
