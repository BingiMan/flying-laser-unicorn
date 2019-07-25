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
            <input className="login-input-text" onChange={this.props.handleChange} type="text" name="name" value={this.props.formData.name}  placeholder="Username" />
            <input className="login-input-text" onChange={this.props.handleChange} type="password" name="password" value={this.props.formData.password} placeholder="Password" />
            <button className="btn" onClick={this.handleRedirect}>Login</button>
          </form>
      </div>
    )
  }
}

export default withRouter(LoginUser);