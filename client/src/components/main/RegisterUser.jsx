import React from 'react'

export default function RegisterUser(props) {


  return (
    <div>
      <form>
        <input onChange={props.handleChange} type="text" name="name" value={props.formData.name} />
        <input onChange={props.handleChange} type="password" name="password" value={props.formData.password} />
        <input onChange={props.handleChange} type="text" name="email" value={props.formData.email} />
        <button onClick={props.handleSubmit}>Register</button>
      </form>

    </div>


  )
}