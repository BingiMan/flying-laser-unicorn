import React from 'react'

export const CommentsForm = (props) => {
    return(
        <form>
            <h1>COMMENTS HERE...</h1>
            <input name="message" type="text" placeholder="text here ..." onChange={props.handleChange}/>
            <input name="yeanay" type="text" placeholder=" " onChange={props.handleChange}/>
            <input type="submit" placeholder="Submit" onSubmit={props.handleSubmit}/>
        </form>
    );
};