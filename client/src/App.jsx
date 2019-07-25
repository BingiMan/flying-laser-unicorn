import React from 'react';
import './App.css';
import { createUser, loginUser, createEatery, fetchEateries, storeToken, logoutUser } from './services/api-calls'
import { Route, Link, withRouter } from 'react-router-dom'
import Home from './components/main/Home';
import CommentsList from './components/main/CommentsList'
import Introduction from "./components/main/Introduction";
import SingleEatery from './components/main/SingleEatery';
import EateriesList from './components/main/EateriesList';
import HireUs from "./components/footer/HireUs";
import NavigationBar from "./components/header/NavBar";
import NavBarSide from "./components/header/NavBarSide";
import getTokenFromStorage from './auth';
import RegisterUser from "./components/main/RegisterUser";
import LoginUser from "./components/main/LoginUser"
import { CommentsForm } from "./components/main/CommentsForm";
import Eateries from './components/main/Eateries';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loginFormData: {
        name: '',
        password: ''
      },
      registerFormData: {
        name: '',
        password: '',
        email: ''
      },
      currentUser: null,
      eateries: [],
      eateryFormData: {
        name: '',
        address: '',
        category: '',
        website: '',
        priceRange: null,
      },
      currentEatery: {
        id: "",
        name: "",
        address: "",
        category: "",
        priceRange: ""
      },
      eateriesData: []
    }
  }

  componentDidMount = async () => {
    const resp = await fetchEateries();
    const eateries = resp.restaurants;
    this.setState({
      eateries: eateries
    })
    console.log(`Auth Token: ${getTokenFromStorage()}`)
    const token = localStorage.getItem('authToken');
    if (token !== null) {
      storeToken(token);
    }
  }

  // Below is Reigister From 
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
    console.log(this.state.registerFormData);
    const newUser = await createUser(this.state.registerFormData);
    this.setState({
      registerFormData: {
        name: '',
        password: '',
        email: '',
      },
    })
  }

  // Above is Login From 
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

      user: resp.data.user.id,
      loginFormData: {
        name: '',
        password: '',
      },
    });
    console.log(this.state.currentUser)
  }

  handleEateryChange = (e) => {
    const { name, value } = e.target;
    this.setState(prevState => ({
      eateryFormData: {
        ...prevState.eateryFormData,
        [name]: value
      }
    }))
  }



  handleEaterySubmit = async (ev) => {
    ev.preventDefault();
    const eateries = await createEatery(this.state.eateryFormData)
    console.log(eateries)
    this.setState((prevState) => ({
      eateriesData: [...prevState.eateriesData, eateries],

      eateryFormData: {
        name: '',
        address: '',
        category: 'start',
        website: '',
        priceRange: null,
      },
    }));
    this.props.history.push('/eateries-list')
  }



  handleDetail = (id) => {
    this.setState(prevState => ({
      currentEatery: {
        ...prevState.currentEatery,
        id: id
      }
    }));
  }

  // below is added for log out. wed night ////////////////////////////////////////
  handleLogOut = () => {
    this.setState({
      currentUser: null
    })
    logoutUser();
  }
  // above is added for log out. wed night ////////////////////////////////////////


  render() {
    return (
      <div className="App">
        <header>

          <NavigationBar currentUser={this.state.currentUser}
                         handleLogOut={this.handleLogOut}
                         handleLoginChange={this.handleLoginChange}
                         handleLoginSubmit={this.handleLoginSubmit}
                         loginFormData={this.state.loginFormData}

                         registerFormData={this.state.registerFormData}
                         handleRegisterChange={this.handleRegisterChange}
                         handleRegisterSubmit={this.handleRegisterSubmit}
          />
        </header>

        <main>
          <Route exact path="/" render={() => <Home
              handleEateryChange={this.handleEateryChange}
              handleEaterySubmit={this.handleEaterySubmit}
              eateryFormData={this.eateryFormData}/>} />
          <Route exact path="/introduction" render={() => <Introduction />} />
          <Route exact path="/comments" render={() => <CommentsForm
            handleChange={this.handleCommentFormChange}
            handleSubmit={this.handleCommentFormSubmit}
          />} />
          <Route exact path="/comments-list" render={() => <CommentsList
            comments={this.state.comments}
            commentUpdateFormData={this.state.commentUpdateFormData}
            handleUpdate={this.handleCommentUpdate}
            handleChange={this.handleCommentUpdateChange}
            handleSubmit={this.handleCommentUpdateSubmit}
            handleCancel={this.handleCommentCancel}
          />} />
  
          <Route exact path="/eateries-list" render={() => <EateriesList
            eateries={this.state.eateries}
            eateryUpdateFormData={this.state.eateryUpdateFormData}
            handleDetail={this.handleDetail}
          />} />

          <Route exact path='/addEatery' render={() => <Eateries
            handleEateryChange={this.handleEateryChange}
            handleEaterySubmit={this.handleEaterySubmit}
            eateryFormData={this.state.eateryFormData}
          />} />


          <Route path="/register" exact render={() => <RegisterUser
            formData={this.state.registerFormData}
            handleChange={this.handleRegisterChange}
            handleSubmit={this.handleRegisterSubmit} />} />

          <Route path="/single-eatery/:id" exact render={(props) => <SingleEatery
            {...props}
            currentEatery={this.state.currentEatery}

          />} />
        </main>
        <footer>
          <HireUs />
        </footer>
      </div>

    );
  }
}
export default withRouter(App);