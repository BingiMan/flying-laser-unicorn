import React from 'react';
import { Link } from 'react-router-dom';

export default function EateriesList(props) { 
  return (
    <>
      {props.eateries.map(eatery =>
        <div className="eatery" key={eatery.id}>
          <h3> {eatery.name} </h3>
          <p>{eatery.address}</p>
          <p>{eatery.priceRange}</p>
          <Link 
          to= {`/single-eatery/${eatery.id}`}> Details </Link>

        </div>)}
    </>
  )
}