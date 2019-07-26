import React from 'react';

export default function CommentsList(props) {
  return (
    <>
      {props.comments.map(comment =>
        <div className="comment" key={comment.id}>
          <h3> {comment.message} </h3>
          {props.editingId === '' &&
            <button className='deleteComment' onClick={() => props.handleDelete(comment.id)}> Delete </button>}
          {props.editingId === '' &&
            <button className='updateComment' onClick={() => props.handleUpdate(comment.id)}> Update </button>}
          {props.updatingId === comment.id &&
            (<form>
              <input
                type="text"
                name="message"
                onChange={props.handleChange}
                value={props.commentUpdateFormData.message}
                placeholder="message" />
              <button className='finalizeSubmit' onClick={props.handleSubmit}> Finalize </button>
              <button className='cancelSubmit' onClick={props.handleCancel}> Cancel </button>
            </form>)}
        </div>)}
    </>
  )
}