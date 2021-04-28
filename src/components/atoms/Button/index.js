import React from 'react';

const Button = ({ onClick, text }) => {
  return (
    <div>
      <button type="button" className="btn btn-primary form-control" onClick={onClick}>{text}</button>
    </div>
  );
};

export default Button;
