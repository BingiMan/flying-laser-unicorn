import React from 'react';
import {Route, Link} from 'react-router-dom'
import Home from './components/main/Home';
import './App.css';
import Introduction from "./components/main/Introduction";
import HireUs from "./components/footer/HireUs";
import {Navigation} from "./components/header/NavBar";
import {CommentsForm} from "./components/main/CommentsForm";
import {createComment} from "./services/api_calls";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      commentFormData:{
          message:'',
          yaynay:'',
      },
    };
}

handleCommentFormSubmit = async (ev) =>{
      ev.preventDefault();
      console.log("clicked");
      const newComment = await createComment(this.state.commentFormData);
      this.setState({
          commentFormData:{
              message:'',
              yaynay:'',
          }
      })
    console.log(newComment)
}
handleCommentFormChange = (ev) =>{
    ev.preventDefault();
      const {name , value} = ev.target;
      this.setState(prevState => ({
          commentFormData: {
              ...prevState.commentFormData,
              [name]:value
          }
      }));
      console.log(ev.target.value)
};

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
                handleChange={this.handleCommentFormChange}
                handleSubmit={this.handleCommentFormSubmit}
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
