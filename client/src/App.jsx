import React from 'react';
import {Route, Link} from 'react-router-dom'
import Home from './components/main/Home';
import './App.css';
import Introduction from "./components/main/Introduction";
import HireUs from "./components/footer/HireUs";
import {Navigation} from "./components/header/NavBar";
import {CommentsForm} from "./components/main/CommentsForm";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      commentFormData:{
          message:'',
          yeanay:'',
      },
    };
}

handleCommentsFormChange = (ev) =>{
      const {name , value} = ev.target;
      const newCommentForm = this.setState(prevState => ({
          commentFormData: {
              ...prevState.commentFormData,
              [name]:value
          }
      }));
      console.log(ev.target.value)
}


componentDidMount = async ()=> {

}


  render() {
  return (
      <div className="App">
        <header>
            <Link to="/"> Home </Link>
            <Link to="/introduction"> Introduction </Link>
            <Navigation/>
        </header>

        <main>
            <CommentsForm
                handleChange={this.handleCommentsFormChange}
            />
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
