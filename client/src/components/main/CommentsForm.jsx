import React from 'react'

export const CommentsForm = (props) => {
  return (
    <form>
      <h1>COMMENTS FORM HERE...</h1>
      <input name="message" type="text" placeholder="text here ..." onChange={props.handleChange} />
      <input name="yaynay" type="text" placeholder=" " onChange={props.handleChange} />
      <input type="submit" placeholder="Submit" onClick={props.handleSubmit} />
    </form>
  );
};