import React from 'react';

const catTile = ({ cat, }) => {

  return (
    <div className="tile">
      <img src={ cat.img } />
    </div>
  )
}

export default catTile;
