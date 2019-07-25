import React from 'react';
import { fetchEateries } from '../../services/api-calls';

export default class RandomEatery extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      eatery: ''
    }
  }

  shuffle = (arr) => {
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
  }

  componentDidMount = async () => {
    const resp = await fetchEateries();
    const eatery = this.shuffle(resp.restaurants)[0];
    this.setState({
      eatery: eatery
    })

  };

  render() {
    return (
      <>
        <div className="random-pick eatery">
          <h2>Random Pick for You</h2>
          <h3>{this.state.eatery.name}</h3>
          <p> Address: {this.state.eatery.address}</p>
          <p> Category: {this.state.eatery.category}</p>
          <p> Price Range: {this.state.eatery.price_range}</p>
        </div>
      </>
    )
  }
}