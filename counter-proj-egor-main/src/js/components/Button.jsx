import React from 'react';

const Button = ({ btnText, btnColor, onClick, btnIcon }) => {
  return (
    <button onClick={onClick} className={`btn btn-lg ${btnColor} mx-2`}>
      {btnIcon} {btnText}
    </button>
  );
};

export default Button;
