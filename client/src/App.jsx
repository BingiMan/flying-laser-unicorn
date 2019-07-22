import React from 'react';
import { Route, Link } from 'react-router-dom'
import Home from './components/main/Home';
import './App.css';
import Introduction from "./components/main/Introduction";
import HireUs from "./components/footer/HireUs";
import { Navegation } from "./components/header/NavBar";
import Eateries from './components/main/Eateries';
import { createEatery } from './services/api-calls';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: '',
      eateryFormData: {
        name: '',
        address: '',
        category: '',
        priceRange: null,
      }
    };
  }

  handleEateryChange = (e) => {
    const { name, value } = e.target;
    this.setState(prevState => ({
      eateryformData: {
        ...prevState.eateryformData,
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
      eateryformDate: {
        name: '',
        address: '',
        category: '',
        priceRange: '',
      }
    }))
  }




  componentDidMount = async () => {

  }


  render() {
    return (
      <div className="App">
        <header>
          <Link to="/"> Home </Link>
          <Link to="/introduction"> Introduction </Link>
          <Link to='/addEatery'> Add Eatery</Link>
          <Navegation />

        </header>

        <main>
          <Route exact path="/" render={() => <Home />} />
          <Route exact path="/introduction" render={() => <Introduction />} />
          <Route exact path='/addEatery' render={() => <Eateries
            handleEateryChange={this.handleEateryChange}
            handleEaterySubmit={this.handleEaterySubmit}
            eateryFormData={this.state.eateryFormData}
          />}
          />
        </main>

        <footer>
          <HireUs />
        </footer>
      </div>
    );
  }
}

export default App;
