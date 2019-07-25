import React from 'react';
import { Link } from 'react-router-dom';

export default function EateriesList(props) {
  return (
    <>
      {props.eateries.map(eatery =>
        <div className="eatery" key={eatery.id}>
          <h3> <span>Name:</span> {eatery.name} </h3>
          <p><span>Address:</span> {eatery.address}</p>
          <p><span>Price Range:</span>{eatery.priceRange}</p>
          <Link 
          to= {`/single-eatery/${eatery.id}`}> Details </Link>
        </div>)}
    </>
  )
}