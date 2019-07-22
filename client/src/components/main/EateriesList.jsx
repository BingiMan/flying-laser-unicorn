import React from 'react';

export default function EateriesList(props) { 
  return (
    <>
      {props.eateries.map(eatery =>
        <div className="eatery" key={eatery.id}>
          <h3> {eatery.name} </h3>
          <p>{eatery.address}</p>
          <p>{eatery.priceRange}</p>
          <p>{eatery.category}</p>
          <button onClick={props.handleDelete}> Delete </button>
          <button onClick={props.handleUpdate}> Update </button>
          {props.eateryUpdateFormData.id === eatery.id &&
            (<form onChange={props.handleChange}>
              <input type="text" name="name" placeholder="name of the restraurant" />
              <input type="text" name="address" placeholder="name of the restraurant" />
              <input type="text" name="category" placeholder="name of the restraurant" />
              <input type="text" name="priceRange" placeholder="name of the restraurant" />
              <button name={eatery.id} onClick={props.handleSubmit}>Finalize</button>
              <button onClick={props.handleCancel}>Cancel</button>
            </form>)}
        </div>)}
    </>
  )
}