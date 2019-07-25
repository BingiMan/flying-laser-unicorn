import React from 'react'
import { withRouter } from 'react-router-dom'

class LoginUser extends React.Component {
  constructor(props) {
    super(props)
  }

  handleRedirect = async (e) => {
    e.preventDefault();
    await this.props.handleSubmit(e);
    this.props.history.push('/');
    this.props.hideLogin();
  };


  render() {
    return (
      <div className="login-dialog">
          <form className="login-form">
            <div className="flex">
              <h1 className="form-title">
                Login
              </h1>
            </div>
            <input className="modern-input-text" onChange={this.props.handleChange} type="text" name="name" value={this.props.formData.name} placeholder="Username" />
            <input className="modern-input-text" onChange={this.props.handleChange} type="password" name="password" value={this.props.formData.password} placeholder="Password" />
           <div className="flex">
            <button className="btn form-btn" onClick={this.handleRedirect}>Login</button>
           </div>
          </form>
      </div>
    )
  }
}

export default withRouter(LoginUser);