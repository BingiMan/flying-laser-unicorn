import React from 'react';
import { withRouter } from 'react-router-dom'
class Eateries extends React.Component {
  constructor(props) {
    super(props);
  }

  handleRedirect = async (e) => {
    e.preventDefault()
    await this.props.handleEaterySubmit(e)


    this.props.history.push('/eateries-list')
  }

  render() {
    return (
      <div className='eatery-form'>


        <h3>Submit a place to eat</h3>

        <form onSubmit={(e) => {
          e.preventDefault();
          this.handleRedirect(e);
        }} onSubmit={this.handleRedirect}>


          <label htmlFor="name">Name</label>
          <input
            value={this.props.eateryFormData.name}
            type="text"
            name="name"

            placeholder="enter the name of the restaurant"
            // value={this.props.EateryformData.name}
            onChange={this.props.handleEateryChange}
            id="name" />

          <br />

          <label htmlFor="address">Address</label>
          <input
            value={this.props.eateryFormData.address}
            type="text"
            name="address"
            placeholder='enter the address of the restaurant'
            // value={this.props.EateryformData.address}
            onChange={this.props.handleEateryChange}
            id="address" />

          <br />

          <label htmlFor="website">Website</label>
          <input
            type="url"
            name="website"
            value={this.props.eateryFormData.website}
            placeholder='enter the website of the restaurant'
            // value={this.props.EateryformData.address}
            onChange={this.props.handleEateryChange}
            id="website" />

          <br />



          <input
            type="radio"
            name="priceRange"
            value="1"
            onChange={this.props.handleEateryChange}
            id="priceRange" /> <span>Basically free</span>
          <input
            type="radio"
            name="priceRange"
            value="2"
            onChange={this.props.handleEateryChange}
            id="priceRange" /> <span>Cheap as chips</span>
          <input
            type="radio"
            name="priceRange"
            value="3"
            onChange={this.props.handleEateryChange}
            id="priceRange" /> <span>Won't break the bank</span>
          <input
            type="radio"
            name="priceRange"
            value="4"
            onChange={this.props.handleEateryChange}
            id="priceRange" /> <span>Fancy AF</span>
          <br />

          <label htmlFor="category">Category</label>
          <select className='categoryEats'
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
          <div className='eatButton'>
            <button onClick={this.routeChange} className='submit-resto'>Submit Eatery</button>
          </div>

        </form>
      </div >
    );
  }
}

export default withRouter(Eateries);