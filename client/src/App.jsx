import React from 'react';
import { Route, Link } from 'react-router-dom'
import { createUser, loginUser } from './services/api-calls'
import Home from './components/main/Home';
import './App.css';
import Introduction from "./components/main/Introduction";
import HireUs from "./components/footer/HireUs";
import { Navigation } from "./components/header/NavBar";
import RegisterUser from "./components/main/RegisterUser";
import LoginUser from "./components/main/LoginUser"
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: '',
      loginFormData: {
        name: '',
        password: '',
      },
      registerFormData: {
        name: '',
        password: '',
        email: '',
      },
      currentUser: null,
    };
  }

  handleRegisterChange = (e) => {
    const { target: { name, value } } = e;
    this.setState(prevState => ({
      registerFormData: {
        ...prevState.registerFormData,
        [name]: value,
      }
    }));
  }

  handleRegisterSubmit = async (e) => {
    e.preventDefault();
    console.log(this.state.registerFormData)
    const newUser = await createUser(this.state.registerFormData)

  }

  handleLoginChange = (e) => {
    const { target: { name, value } } = e;
    this.setState(prevState => ({
      loginFormData: {
        ...prevState.loginFormData,
        [name]: value,
      }
    }));
  }

  handleLoginSubmit = async (e) => {
    e.preventDefault()
    const resp = await loginUser(this.state.loginFormData.name, this.state.loginFormData.password)
    this.setState({
      currentUser: resp.data.user.name,
    });
    console.log(this.state.currentUser)
  }



  componentDidMount = async () => {

  }


  render() {
    return (
      <div className="App">
        <header>
          <Link to="/"> Home </Link>
          <Link to="/login">Log In</Link>
          <Link to="/introduction"> Introduction </Link>
          <Navigation />
          <Link to="/register">Register</Link>


        </header>

        <main>
          <Route exact path="/" render={() => <Home />} />
          <Route path="/login" exact render={() => <LoginUser handleChange={this.handleLoginChange} handleSubmit={this.handleLoginSubmit} formData={this.state.loginFormData} />} />
          <Route exact path="/introduction" render={() => <Introduction />} />
          <Route path="/register" exact render={() => <RegisterUser formData={this.state.registerFormData} handleChange={this.handleRegisterChange} handleSubmit={this.handleRegisterSubmit} />} />
        </main>

        <footer>
          <HireUs />
        </footer>
      </div>
    );
  }
}

export default App;
