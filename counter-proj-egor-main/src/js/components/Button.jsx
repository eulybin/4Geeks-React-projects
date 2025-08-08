import React from 'react';

const Button = ({ btnText, btnColor, onClick }) => {
  return (
    <button onClick={onClick} className={`btn btn-lg ${btnColor} mx-2`}>
      {btnText}
    </button>
  );
};

export default Button;
