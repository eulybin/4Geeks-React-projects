import React, { useState, useEffect } from 'react';

const Home = () => {
  const [color, setColor] = useState('');
  const [toggleLights, setToggleLights] = useState(true);
  const [showPurpleLight, setShowPurpleLight] = useState(false);

  console.log(color);

  const handleClick = (e) => {
    const selectedTrafficLight = e.target.className;
    setColor(selectedTrafficLight);
    e.target.classList.add('selected');
  };

  useEffect(() => {
    const interval = setInterval(() => {
      if (toggleAllLights) {
        let currentLight = document.querySelector;
      }
    }, 500);
  }, []);

  // ------------ TOGGLE ALL LIGHTS  -------------
  const toggleAllLights = () => {
    setToggleLights((prevToggleLightsState) => !prevToggleLightsState);
  };

  // ------------ TOGGLE PURPLE LIGHT  -------------
  const togglePurpleLight = () => {
    setShowPurpleLight((prevPurpleLightState) => !prevPurpleLightState);
  };

  return (
    <div className='d-flex justify-content-center'>
      <div onClick={handleClick} className='traffic-light-body'>
        <div className='red'></div>
        <div className='yellow'></div>
        <div className='green'></div>
        {showPurpleLight && (
          <div className='purple-body'>
            <div className='purple'></div>
          </div>
        )}
      </div>
      <div className='traffic-light-stick'></div>

      <button onClick={toggleAllLights} className='toggle-btn btn btn-primary btn-lg'>
        Toggle Lights
      </button>
      <button onClick={togglePurpleLight} className='toggle-purple btn btn-secondary btn-lg'>
        Toggle Purple
      </button>
    </div>
  );
};

export default Home;
