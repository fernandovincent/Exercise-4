import React from 'react';

const Button = ({ onSubmit, text }) => {
  return (
    <div>
      <button type="button" className="btn btn-primary form-control" onClick={onSubmit}>{text}</button>
    </div>
  );
};

export default Button;
