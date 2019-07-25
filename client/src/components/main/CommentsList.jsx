import React from 'react';

export default function CommentsList(props) {
  return (
    <>
      {/* <h1>comment list below</h1> */}
      {props.comments.map(comment =>
        <div className="comment" key={comment.id}>
          <h3>{comment.yaynay.toString()}</h3>
          <h1> {comment.message} </h1>
          {props.editingId === '' &&
            <button onClick={() => props.handleDelete(comment.id)}> Delete </button>}
          {props.editingId === '' &&
            <button onClick={() => props.handleUpdate(comment.id)}> Update </button>}
          {props.updatingId === comment.id &&
            (<form>
              <input
                type="text"
                name="message"
                onChange={props.handleChange}
                value={props.commentUpdateFormData.message}
                placeholder="message" />
              <input
                type="text"
                name="yaynay"
                onChange={props.handleChange}
                value={props.commentUpdateFormData.yaynay}
                placeholder="yay(t) or nay(f)" />
              <button onClick={props.handleSubmit}> Finalize </button>
              <button onClick={props.handleCancel}> Cancel </button>
            </form>)}
        </div>)}
    </>
  )
}