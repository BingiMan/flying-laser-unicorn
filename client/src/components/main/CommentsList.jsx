import React from 'react';

export default function CommentsList(props) { 
  return (
    <>
      {props.comments.map(comment =>
        <div className="comment" key={comment.id}>
          <h3> {comment.name} </h3>
          <p>{comment.address}</p>
          <p>{comment.priceRange}</p>
          <p>{comment.category}</p>
          {/* <button onClick={this.handleDelete}> Delete </button>
          <button onClick={this.handleUpdate}> Update </button> */}
          {/* {props.commentUpdateFormData.id === comment.id &&
            (<form onChange={props.handleChange}>
              <input type="text" name="message" placeholder="name of the restraurant" />
              <input type="text" name="yaynay" placeholder="name of the restraurant" />
              <button name={comment.id} onClick={props.handleSubmit}> Finalize </button>
              <button onClick={props.handleCancel}> Cancel </button>
            </form>)} */}
        </div>)}
    </>
  )
}