import React from 'react'

export const CommentsForm = (props) => {
  return (
    <form>
      <h1 className='commenth1'>Have something to say about this place?</h1>
      <div classname='commentSubmit'>
        <input name="message" type="text" placeholder="text here ..." onChange={props.handleChange} />
        {/* <input name="yaynay" type="text" placeholder=" " onChange={props.handleChange} /> */}
        <input className='inputSubmitComment' type="submit" placeholder="Submit" onClick={props.handleSubmit} />
      </div>
    </form>
  );
};