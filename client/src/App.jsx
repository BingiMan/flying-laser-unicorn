import React from 'react';
import Home from './components/main/Home'
import './App.css';

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

        </header>
        <main>
        <Home/>
        </main>
        <footer>

        </footer>
      </div>
  );
}
}

export default App;
