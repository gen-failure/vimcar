import React from 'react';

import './Product.scss';

export default function({id,title}) {
  return (
    <div className="productComponent">
      <div className="productInfo">
        <img src={`/assets/${id}.png`} alt={title} />
        <h2>{title}</h2>
      </div>
    </div>
  )
}
