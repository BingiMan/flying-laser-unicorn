import React from 'react';
import { withRouter } from 'react-router-dom'
class RegisterUser extends React.Component {
  constructor() {
    super()
  }

  handleRedirect = async (e) => {
    e.preventDefault()
    await this.props.handleSubmit(e);
    await this.props.showLogin(e);
    this.props.history.push('/')
  }
  handleClose = (e) => {
    e.preventDefault();
    this.props.hideRegister();
  }

  render() {
    return (
      <div className="register-dialog">
        <div className="close-thik" onClick={this.handleClose} ></div>
        <form className="register-form">
          <div className="flex">
            <h1 className="form-title">Register</h1>
          </div>
          <input className="modern-input-text" onChange={this.props.handleChange} type="text" name="name" value={this.props.formData.name} placeholder="Username" />
          <input className="modern-input-text" onChange={this.props.handleChange} type="password" name="password" value={this.props.formData.password} placeholder="Password" />
          <input className="modern-input-text" onChange={this.props.handleChange} type="email" name="email" value={this.props.formData.email} placeholder="Email" />
          <div className="flex">
            <button className="btn form-btn" onClick={this.handleRedirect}>Register</button>
          </div>
        </form>
      </div >
    )
  }
}

export default withRouter(RegisterUser);