import React from 'react';

const Button = ({ btnText, btnBg, onClick }) => {
  return (
    <button onClick={onClick} className={`btn btn-lg ${btnBg} mx-2`}>
      {btnText}
    </button>
  );
};

export default Button;
