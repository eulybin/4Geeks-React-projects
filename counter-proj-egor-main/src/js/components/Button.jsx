import React from 'react';

const Button = ({ btnText, btnBg }) => {
  return <div className={`btn btn-lg ${btnBg} mx-3`}>{btnText}</div>;
};

export default Button;
