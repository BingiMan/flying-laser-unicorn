import React from 'react';
import { Link } from 'react-router-dom';

export default function EateriesList(props) {

  return (
    <>

      <div className="backdrop-wrapper">
        <div class="backdrop">
          <p class="text lighten">ALL EATERIES</p>
        </div>
      </div>

      {props.eateries.map(eatery =>
        <div className="eatery eatery-list-item" key={eatery.id}>
          <h3 className="knockout">{eatery.name.toUpperCase()} </h3>
          <p><span>Address:</span> {eatery.address}</p>
          <p><span>Price Range:</span>{eatery.price_range}</p>
          <Link id="detail-button"
            to={`/single-eatery/${eatery.id}`}> Details </Link>
        </div>)}
    </>
  )
}