import React from 'react';
import './style.css';
import About from './About';
import Team from './Team';
import RandomEatery from './RandomEatery';
import Eateries from './Eateries';

export default class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      posting: false
    }
  }

  // below is for clickle add eatery div //
  postingEatery = () => {
    this.setState(prevState => ({
      posting: !prevState.posting
    }))
  }
  // above is for clickle add eatery div //


  render() {
    return (
      <section>

        <div>
          <div className='header-img'>
            <img className='intro-image' src="https://i.imgur.com/lD9dGJ9.jpg" alt="Panda and bamboo" />
          </div>
          <About />

          <div id="random-and-posting">
            <div id="postingEatery"
              onClick={this.postingEatery}>
              {this.state.posting ?
                "Cancel Posting" : "Posting an Eatery"}
            </div>
            {this.state.posting && <Eateries
              handleEateryChange={this.props.handleEateryChange}
              handleEaterySubmit={this.props.handleEaterySubmit}
              eateryFormData={this.props.eateryFormData} />}
            {!this.state.posting && <RandomEatery />}
          </div>
          <Team />
        </div>
      </section>
    )
  }
}