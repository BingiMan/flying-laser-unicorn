import React from 'react';
import {Route, Link} from 'react-router-dom'
import Home from './components/main/Home';
import './App.css';
import Introduction from "./components/main/Introduction";
import HireUs from "./components/footer/HireUs";
import {Navegation} from "./components/header/NavBar";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: '',
    };
}


componentDidMount = async ()=> {

}


  render() {
  return (
      <div className="App">
        <header>
            <Link to="/"> Home </Link>
            <Link to="/introduction"> Introduction </Link>
            <Navegation/>

        </header>

        <main>
            <Route exact path="/" render={()=> <Home/>} />
            <Route exact path="/introduction" render={() => <Introduction/>} />
        </main>

        <footer>
            <HireUs/>
        </footer>
      </div>
  );
}
}

export default App;
