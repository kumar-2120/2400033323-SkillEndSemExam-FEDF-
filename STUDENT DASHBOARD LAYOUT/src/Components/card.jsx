import React from 'react';

const Card = ({ title, children }) => (
  <div className="card">
    <h3>{title}</h3>
    <p>{children}</p>
  </div>
);

export default Card;
