import React from 'react'

export default function LoginUser(props) {
  return (
    <div>
      <form>
        <input onChange={props.handleChange} type="text" name="name" value={props.formData.name} />
        <input onChange={props.handleChange} type="password" name="password" value={props.formData.password} />
        <button onClick={props.handleSubmit}>Login</button>
      </form>
    </div>
  )
}