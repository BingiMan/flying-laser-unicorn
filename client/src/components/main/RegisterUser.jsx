import React from 'react';
import { withRouter } from 'react-router-dom'
class RegisterUser extends React.Component {
  constructor() {
    super()
  }

  handleRedirect = async (e) => {
    e.preventDefault()
    await this.props.handleSubmit(e);
    this.props.history.push('/login')

  }

  render() {
    return (
      <div className="register-dialog">
        <form className="register-form">
          <div className="flex">
            <h1 className="form-title">Register</h1>
          </div>
          <input className="modern-input-text" onChange={this.props.handleChange} type="text" name="name" value={this.props.formData.name} placeholder="Username"/>
          <input className="modern-input-text" onChange={this.props.handleChange} type="password" name="password" value={this.props.formData.password} placeholder="Password"/>
          <input className="modern-input-text" onChange={this.props.handleChange} type="text" name="email" value={this.props.formData.email} placeholder="Email"/>
          <div className="flex">
            <button className="btn form-btn" onClick={this.handleRedirect}>Register</button>
          </div>
        </form>
      </div >
    )
  }
}

export default withRouter(RegisterUser);