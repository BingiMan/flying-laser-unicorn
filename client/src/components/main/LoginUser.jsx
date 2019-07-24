import React from 'react'
import { withRouter } from 'react-router-dom'

class LoginUser extends React.Component {
  constructor(props) {
    super(props)
  }

  handleRedirect = async (e) => {
    e.preventDefault();
    await this.props.handleSubmit(e)
    this.props.history.push('/')
  }

  render() {
    return (
      <div>
        <form>
          <input onChange={this.props.handleChange} type="text" name="name" value={this.props.formData.name} />
          <input onChange={this.props.handleChange} type="password" name="password" value={this.props.formData.password} />
          <button onClick={this.handleRedirect}>Login</button>
        </form>
      </div >
    )
  }
}

export default withRouter(LoginUser);