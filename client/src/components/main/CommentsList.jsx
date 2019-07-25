import React from 'react';

export default function CommentsList(props) {
  return (
    <>
      {/* <h1>comment list below</h1> */}
      {props.comments.map(comment =>
        <div className="comment" key={comment.id}>
          {/* <h3>{comment.yaynay.toString()}</h3> */}
          <h3> {comment.message} </h3>
          {props.editingId === '' &&
            <button className='deleteComment' onClick={() => props.handleDelete(comment.id)}> Delete </button>}
          {props.editingId === '' &&
            <button className='updateComment' onClick={() => props.handleUpdate(comment.id)}> Update </button>}
          {props.updatingId === comment.id &&
            (<form>
              <span class="tip tip-left"></span>
              <input
                type="text"
                name="message"
                onChange={props.handleChange}
                value={props.commentUpdateFormData.message}
                placeholder="message" />
              {/* <input
                type="text"
                name="yaynay"
                onChange={props.handleChange}
                value={props.commentUpdateFormData.yaynay}
                placeholder="yay(t) or nay(f)" /> */}
              <button className='finalizeSubmit' onClick={props.handleSubmit}> Finalize </button>
              <button className='cancelSubmit' onClick={props.handleCancel}> Cancel </button>
            </form>)}
        </div>)}
    </>
  )
}