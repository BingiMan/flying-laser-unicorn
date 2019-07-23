import React from 'react';
import CommentsList from './CommentsList';
import { CommentsForm } from './CommentsForm';
import { eateryInfo } from '../../services/api-calls'


export default class SingleEatery extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      updating: false,
      eateryData: ""
    }
  }
  componentDidMount = async () => {

    const resp = await eateryInfo(parseInt(this.props.match.params.id));
    const eateryData = resp.restaurant;
   
    this.setState({
      eateryData: eateryData
    })
  }

  handleUpdate = () => {
    this.setState({
      updating: true
    })
  }

  render() {
    return (
      <>
        
          <div className="eateryInfo">
            <h2>{this.state.eateryData.name}</h2>
            <p>Address: {this.state.eateryData.address}</p>
            <p>Category: {this.state.eateryData.category}</p>
            <p>Price Range: {this.state.eateryData.PriceRange}</p>
            <button onClick={this.handleUpdate}>Update</button>
          </div>

        {this.state.updating &&
          (<form onChange={this.props.handleChange}>
            <input type="text" name="name" placeholder="name of the restraurant" />
            <input type="text" name="address" placeholder="name of the restraurant" />
            <input type="text" name="category" placeholder="name of the restraurant" />
            <input type="text" name="priceRange" placeholder="name of the restraurant" />
            <button name={this.props.currentEatery.id} onClick={this.props.handleSubmit}> Finalize </button>
            <button onClick={this.props.handleCancel}> Cancel </button>
          </form>)}

        <CommentsForm />
        <CommentsList
          comments={this.props.comments}
          commentUpdateFormData={this.props.commentUpdateFormData}
          handleUpdate={this.props.handleCommentUpdate}
          handleChange={this.props.handleCommentUpdateChange}
          handleSubmit={this.props.handleCommentUpdateSubmit}
          handleCancel={this.props.handleCommentCancel}
        />

      </>

    )
  }
}