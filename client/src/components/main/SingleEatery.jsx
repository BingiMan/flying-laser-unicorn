import React from 'react';
import CommentsList from './CommentsList';


export default function SingleEatery(props) {

  return (
    <>
      <div className="eateryInfo">
        <h2>{props.currentEatery.name}</h2>
        <p>Address: {props.currentEatery.address}</p>
        <p>Category: {props.currentEatery.category}</p>
        <p>Price Range: {props.currentEatery.PriceRange}</p>
      </div>
      <CommentsList
        comments={props.comments}
        commentUpdateFormData={props.commentUpdateFormData}
        handleUpdate={props.handleCommentUpdate}
        handleChange={props.handleCommentUpdateChange}
        handleSubmit={props.handleCommentUpdateSubmit}
        handleCancel={props.handleCommentCancel}
      />

    </>

  )
}