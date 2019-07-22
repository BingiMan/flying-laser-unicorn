import React from 'react';

class Eateries extends React.Component {
  render() {
    return (
      <div>
        <h3>Submit Eatery</h3>
        <form onSubmit={(e) => {
          e.preventDefault();
          this.props.handleEaterySubmit(e);
          this.props.handleEateryChange(e);
        }}>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            name="name"
            // value={this.props.EateryformData.name}
            onChange={this.props.handleEateryChange}
            id="name" />
          <br />
          <label htmlFor="address">Addess</label>
          <input
            type="text"
            name="address"
            // value={this.props.EateryformData.address}
            onChange={this.props.handleEateryChange}
            id="address" />
          <br />
          <label htmlFor="price_range">Price Range</label>
          <input
            type="radio"
            name="price_range"
            // value={this.props.EateryformData.priceRange}
            onChange={this.props.handleEateryChange}
            id="price_range" />
          <input
            type="radio"
            name="price_range"
            // value={this.props.EateryformData.priceRange}
            onChange={this.props.handleEateryChange}
            id="price_range" />
          <input
            type="radio"
            name="price_range"
            // value={this.props.EateryformData.priceRange}
            onChange={this.props.handleEateryChange}
            id="price_range" />
          <input
            type="radio"
            name="price_range"
            // value={this.props.EateryformData.priceRange}
            onChange={this.props.handleEateryChange}
            id="price_range" />
          <input
            type="radio"
            name="price_range"
            // value={this.props.EateryformData.priceRange}
            onChange={this.props.handleEateryChange}
            id="price_range" />
          <input
            type="radio"
            name="price_range"
            // value={this.props.EateryformData.priceRange}
            onChange={this.props.handleEateryChange}
            id="price_range" />
          <br />
          <label htmlFor="category">Category</label>
          <select
            onChange={this.props.handleEateryChange}
            // value={this.props.EateryformData.category}
            name="category">
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

          <button>Submit Eatery</button>
        </form>
      </div >
    );
  }
}

export default Eateries;