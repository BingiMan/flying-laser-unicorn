import React from 'react';
import { withRouter } from 'react-router-dom'
class Eateries extends React.Component {
  constructor(props) {
    super(props);
  }
  routeChange() {
    let path = `/eateries-list`;
    // this.props.history.push(path);
  }

  render() {
    return (
      <div className='eatery-form'>

        <div className='eateryh3'>
          <h3>Submit a place to eat</h3>
        </div>
        <form onSubmit={(e) => {
          e.preventDefault();
          this.props.handleEaterySubmit(e);
        }}>


          <label htmlFor="name">Name</label>
          <input
            value={this.props.eateryFormData.name}
            type="text"
            name="name"
            onChange={this.props.handleEateryChange}
            id="name" />

          <br />

          <label htmlFor="address">Address</label>
          <input
            value={this.props.eateryFormData.address}
            type="text"
            name="address"
            onChange={this.props.handleEateryChange}
            id="address" />

          <br />

          <label htmlFor="website">Website</label>
          <input
            type="url"
            name="website"
            value={this.props.eateryFormData.website}
            onChange={this.props.handleEateryChange}
            id="website" />

          <br />



          <input
            type="radio"
            name="priceRange"
            value="1"
            onChange={this.props.handleEateryChange}
            id="priceRange" /> <span>1</span>
          <input
            type="radio"
            name="priceRange"
            value="2"
            onChange={this.props.handleEateryChange}
            id="priceRange" /> <span>2</span>
          <input
            type="radio"
            name="priceRange"
            value="3"
            onChange={this.props.handleEateryChange}
            id="priceRange" /> <span>3</span>
          <input
            type="radio"
            name="priceRange"
            value="4"
            onChange={this.props.handleEateryChange}
            id="priceRange" /> <span>4</span>
          <input
            type="radio"
            name="priceRange"
            value="5"
            onChange={this.props.handleEateryChange}
            id="priceRange" /> <span>5</span>

          <br />

          <label htmlFor="category">Category</label>
          <select
            onChange={this.props.handleEateryChange}
            name="category" value={this.props.eateryFormData.category}>
            <option
              value="start">Please select one</option>
            <option
              value="Ramen">Ramen</option>
            <option
              value="Vegan">Vegan</option>
            <option
              value="Pizza">Pizza</option>
            <option
              value="Cafe">Cafe</option>
            <option
              value="Sandwich_shop">Sandwiches</option>
            <option
              value="Healthy_cafe">Healty cafe</option>
            <option
              value="cafeteria">cafeteria</option>
            <option
              value="deli">Deli</option>
          </select>
          <br />
          <button onClick={this.routeChange} className='submit-resto'>Submit Eatery</button>
        </form>
      </div >
    );
  }
}

export default withRouter(Eateries);