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
      <div>
        <form>
          <input onChange={this.props.handleChange} type="text" name="name" value={this.props.formData.name} />
          <input onChange={this.props.handleChange} type="password" name="password" value={this.props.formData.password} />
          <input onChange={this.props.handleChange} type="text" name="email" value={this.props.formData.email} />
          <button onClick={this.handleRedirect}>Register</button>
        </form>
      </div >
    )
  }
}

export default withRouter(RegisterUser);