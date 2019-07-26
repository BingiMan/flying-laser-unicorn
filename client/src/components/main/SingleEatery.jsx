import React from 'react';
import { withRouter } from 'react-router-dom';
import CommentsList from './CommentsList';
import { CommentsForm } from './CommentsForm';
import {
  eateryInfo,
  updateEatery,
  fetchComments,
  deleteEatery,
  createComment,
  deleteComment,
  updateComment
} from '../../services/api-calls'


class SingleEatery extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      updating: false,
      commenting: false,
      updatingcommentId: '',
      eateryData: {
        name: "",
        address: "",
        website: "",
        category: "",
        price_range: ""
      },
      eateryUpdateFormData: {
        id: "",
        name: "",
        address: "",
        website: "",
        category: "",
        price_range: ""
      },
      comments: [],
      commentFormData: {
        message: "",
      },
      commentUpdateFormData: {
        message: "",
      }
    }
  }

  componentDidMount = async () => {
    const eateryid = parseInt(this.props.match.params.id)
    const resp = await eateryInfo(eateryid);
    const resp2 = await fetchComments(eateryid);
    const comments = resp2.comments;
    const data = resp.restaurant;
    this.setState({
      eateryData: {
        ...data,
        id: eateryid
      },
      comments
    })
    console.log(this.state.comments);
  }

  // below is for the Eatery on this page's update and deletion //////////
  handleUpdate = (eateryData) => {
    this.setState({
      updating: true,
      eateryUpdateFormData: eateryData
    })
  }

  handleUpdateCancel = () => {
    this.setState({
      updating: false
    })
  }

  handleEateryUpdateChange = (ev) => {
    const { name, value } = ev.target;
    this.setState(prevState => ({
      eateryUpdateFormData: {
        ...prevState.eateryUpdateFormData,
        [name]: value
      }
    }));

  }

  handleEateryUpdateSubmit = async (ev) => {
    ev.preventDefault();
    const data = this.state.eateryUpdateFormData;
    const resp = await updateEatery(data);

    this.setState({
      eateryUpdateFormData: {
        id: "",
        name: "",
        address: "",
        category: "",
        price_range: ""
      },
      updating: false,
      eateryData: resp,
    })
  }

  handleDelete = async (id) => {
    const resp = await deleteEatery(id);
    this.props.history.push('/eateries-list');
  }
  // above is for the Eatery on this page's update and deletion //////////


  // below is for posting new comments ////////////////////////////////////
  handleAddComment = () => {
    this.setState(prevState => ({
      commenting: !prevState.commenting
    }))
  }

  handleCommentFormChange = (ev) => {
    const { name, value } = ev.target;
    this.setState(prevState => ({
      commentFormData: {
        ...prevState.commentFormData,
        [name]: value
      }
    }));
    console.log(ev.target.value);
  };

  handleCommentFormSubmit = async (ev) => {
    ev.preventDefault();
    const data = { ...this.state.commentFormData, id: this.state.eateryData.id };
    console.log(data);
    const newComment = await createComment(data);
    this.setState(prevState => ({
      commentUpdateFormData: {
        message: '',
        yaynay: '',
      },
      commenting: false,
      comments: [...prevState.comments, newComment]
    }))
  }
  // aboove is for posting new comments ////////////////////////////////////


  // below is for updating/deleting comments ////////////////////////////////////
  handleCommentDelete = async (id) => {
    const resp = await deleteComment(id);
    this.setState(prevState => ({
      comments: prevState.comments.filter(comment => comment.id !== id)
    }))
  }

  handleCommentUpdate = (id) => {
    this.setState({
      updatingcommentId: id
    });
  }

  handleCommentUpdateChange = (ev) => {
    const { name, value } = ev.target;
    this.setState(prevState => ({
      commentUpdateFormData: {
        ...prevState.commentUpdateFormData,
        [name]: value
      }
    }));
  }

  handleCommentUpdateSubmit = async (ev) => {
    ev.preventDefault();
    console.log('clicked');
    const data = { ...this.state.commentUpdateFormData, id: this.state.updatingcommentId };
    console.log(data);
    const resp = await updateComment(data);
    console.log(resp);
    this.setState({
      commentUpdateFormData: {
        message: "",
      },
      updatingcommentId: ''
    })
  }

  handleCommentCancel = () => {
    this.setState({
      updatingcommentId: ''
    });
  }

  render() {
    return (
      <>
        <div className="backdrop-wrapper-eatery">
          <div class="backdrop-eatery">
            <p class="text lighten">More information</p>
          </div>
        </div>

        <div className="eateryInfo">
          <h2 className='eateryh2'>{this.state.eateryData.name}</h2>
          <p className='eateryAdressTitle'>Address:</p> <p className='eateryAdressResponse'>{this.state.eateryData.address}</p>
          <p className='eateryCategoryTitle'>Category:</p> <p className='eateryCategoryResponse'>{this.state.eateryData.category}</p>
          <p className='eateryPriceTitle'>Price Range:</p> <p className='eateryPriceResponse'>{this.state.eateryData.price_range}</p>
          <p className='eateryWebTitle'>Website:</p> <p className='eateryWebResponse'>{this.state.eateryData.website}</p>
          <div className='eateryButtons'>
            {}
            {!this.state.updating &&
              <button className='updateEateryButton' onClick={() => { this.handleUpdate(this.state.eateryData) }}> Update </button>}
            {!this.state.updating &&
              <button className='deleteEateryButton' onClick={() => { this.handleDelete(this.state.eateryData.id) }}> Delete </button>}
          </div>
        </div>


        {this.state.updating &&
          (<form onSubmit={this.handleEateryUpdateSubmit}>
            <div className='updateEatery'>
              <input
                type="text"
                value={this.state.eateryUpdateFormData.name}
                name="updateName"
                placeholder="name of the restraurant"
                onChange={this.handleEateryUpdateChange}
              />
              <input
                type="text"
                value={this.state.eateryUpdateFormData.address}
                name="updateAddress"
                placeholder="address of the restraurant"
                onChange={this.handleEateryUpdateChange}
              />
              <input
                type="radio"
                name="priceRange"
                value={this.state.eateryUpdateFormData.price_range}
                onChange={this.handleEateryUpdateChange}
                id="priceRange" /> <span>Basically free</span>
              <input
                type="radio"
                name="priceRange"
                value={this.state.eateryUpdateFormData.price_range}
                onChange={this.handleEateryUpdateChange}
                id="priceRange" /> <span>Cheap as chips</span>
              <input
                type="radio"
                name="priceRange"
                value={this.state.eateryUpdateFormData.price_range}
                onChange={this.handleEateryUpdateChange}
                id="priceRange" /> <span>Won't break the bank</span>
              <input
                type="radio"
                name="priceRange"
                value={this.state.eateryUpdateFormData.price_range}
                onChange={this.handleEateryUpdateChange}
                id="priceRange" /> <span>Fancy AF</span>

              <label htmlFor="category">Category</label>
              <select className='categoryEats'
                onChange={this.handleEateryUpdateChange}
                name="category"
                value={this.state.eateryUpdateFormData.category}
              >
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


              <button className='finalizeEats' name={this.props.currentEatery.id}> Finalize </button>
              <button className='cancelEats' onClick={this.handleUpdateCancel}> Cancel </button>
            </div>
          </form>

          )}

        <button className='leaveCommentButton' onClick={this.handleAddComment}>
          {!this.state.commenting ? "Leave a comment" : "Cancel commenting"}
        </button>

        {this.state.commenting &&
          <CommentsForm
            handleChange={this.handleCommentFormChange}
            handleSubmit={this.handleCommentFormSubmit} />
        }

        <CommentsList
          comments={this.state.comments}
          updatingId={this.state.updatingcommentId}
          handleDelete={this.handleCommentDelete}
          handleUpdate={this.handleCommentUpdate}
          handleChange={this.handleCommentUpdateChange}
          handleSubmit={this.handleCommentUpdateSubmit}
          handleCancel={this.handleCommentCancel}
          editingId={this.state.updatingcommentId}
          commentUpdateFormData={this.state.commentUpdateFormData}

        />

      </>

    )
  }
}

export default withRouter(SingleEatery);