import React from 'react';
import { Link } from 'react-router-dom';

export default function EateriesList(props) {

  const displayPrice = (str) => {
    if (str === "1") {
      return "Basically Free";
    } else if (str === "2") {
      return "Cheap as Chips";
    } else if (str === "3") {
      return "Won\'t Break the Bank";
    } else if (str === "4") {
      return "Fancy AF";
    } else {
      return "Not Sure";
    }
  };

  return (
    <>
      <div className="backdrop-wrapper">
        <div className="backdrop">
          <p className="text lighten">ALL EATERIES</p>
        </div>
      </div>

      {props.eateries.map(eatery =>
        <div className="eatery eatery-list-item" key={eatery.id}>
          <h3 className="knockout">{eatery.name.toUpperCase()} </h3>
          <p><span>Address:</span> {eatery.address}</p>
          <p><span>Category:</span>{eatery.category}</p>
          <p><span>Price Range:</span>{displayPrice(eatery.price_range)}</p>
          <Link id="detail-button"
            to={`/single-eatery/${eatery.id}`}> Details </Link>
        </div>)}
    </>
  )
}