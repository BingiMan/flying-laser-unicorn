import React from 'react'

export const CommentsForm = (props) => {
    return(
        <form>
            <h1>COMMENTS HERE...</h1>
            <label htmlFor="name">Comment</label>
            <input name="message" type="text" placeholder="text here ..." onChange={props.handleChange}/>
            <label htmlFor="name">Yaynay</label>
            <input name="yaynay" type="text" placeholder=" " onChange={props.handleChange}/>
            <input type="submit" placeholder="Post" onClick={props.handleSubmit}/>
        </form>
    );
};