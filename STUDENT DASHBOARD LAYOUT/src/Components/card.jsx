import React from 'react';

const Card = ({ title, children }) => (
  <div className="card">
    <h3>{title}</h3>
    <div dangerouslySetInnerHTML={{ __html: children }} />
  </div>
);

export default Card;
