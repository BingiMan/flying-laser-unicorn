import React from 'react';
import './App.css';
import { Route, Link } from 'react-router-dom'
import Home from './components/main/Home';
import Introduction from "./components/main/Introduction";
import CommentsList from './components/main/CommentsList';
import EateriesList from './components/main/EateriesList';
import HireUs from "./components/footer/HireUs";
import { Navigation } from "./components/header/NavBar";
import { CommentsForm } from "./components/main/CommentsForm";
import { createComment } from "./services/api_calls";
import Eateries from './components/main/Eateries';
import { createEatery } from './services/api_calls';


class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            commentFormData: {
                message: '',
                yaynay: '',
            },
            user: '',
            comments: [],
            eateries: [],
            eateryFormData: {
                name: '',
                address: '',
                category: '',
                priceRange: null,
            },
            commentUpdateFormData: {
                id: "",
                messsage: "",
                yaynay: ""
            },
            eateryUpdateFormData: {
                id: "",
                name: "",
                address: "",
                category: "",
                priceRange: ""
            }

        };
    }

    handleEateryChange = (e) => {
        const { name, value } = e.target;
        this.setState(prevState => ({
            eateryformData: {
                ...prevState.eateryformData,
                [name]: value
            }
        }))
    }

    handleEaterySubmit = async (ev) => {
        ev.preventDefault();
        const eateries = await createEatery(this.state.eateryFormData)
        console.log(eateries)
        this.setState((prevState) => ({
            eateriesData: [...prevState.eateriesData, eateries],
            eateryformDate: {
                name: '',
                address: '',
                category: '',
                priceRange: '',
            }
        }))
    }
    //below is eatieryList and commentList function stuff//
    handleCommentUpdate = (ev) => {
        this.setState(prevState => ({
            commentUpdateFormData: {
                ...prevState.commentUpdateFormData,
                id: ev.target.name
            }
        }));
    }
    handleEateryUpdate = (ev) => {
        this.setState(prevState => ({
            ...prevState.eateryUpdateFormData,
            id: ev.target.name
        }));
    }
    handleCommentUpdateChange = (ev) => {
        const { name, value } = ev.target;
        this.setState(prevState => ({
            eateryUpdateFormData: {
                ...prevState.commentUpdateFormData,
                [name]: value
            }
        }));
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
    handleCommentUpdateSubmit = async (ev) => {
        ev.preventDefault();
        const data = this.state.commentUpdateFormData;
        console.log(`update Comment No. ${data.id} !!!`);
        //insert function from service to make axios call. await!!
        this.setState({
            commentUpdateFormData: {
                id: "",
                messsage: "",
                yaynay: ""
            }
        })
    }
    handleEateryUpdateSubmit = async (ev) => {
        ev.preventDefault();
        const data = this.state.eateryUpdateFormData;
        console.log(`updated Eatery no. ${data.id} !!!`);
        //insert function from service to make axios call. await!!
        this.setState({
            eateryUpdateFormData: {
                id: "",
                name: "",
                address: "",
                category: "",
                priceRange: ""
            }
        })
    }
    handleCommentCancel = () => {
        this.setState(prevState => ({
            commentUpdateFormData: {
                ...prevState.commentUpdateFormData,
                id: ""
            }
        }))
    }
    handleEateryCancel = () => {
        this.setState(prevState => ({
            eateryUpdateFormData: {
                ...prevState.eateryUpdateFormData,
                id: ""
            }
        }))
    }
    //above is eatieryList and commentList function stuff//

    handleCommentFormSubmit = async (ev) => {
        ev.preventDefault();
        console.log("clicked");
        const newComment = await createComment(this.state.commentFormData);
        this.setState({
            commentFormData: {
                message: '',
                yaynay: '',
            }
        })
        console.log(newComment)
    }
    handleCommentFormChange = (ev) => {
        ev.preventDefault();
        const { name, value } = ev.target;
        this.setState(prevState => ({
            commentFormData: {
                ...prevState.commentFormData,
                [name]: value
            }
        }));
        console.log(ev.target.value)
    };

    render() {
        return (
            <div className="App">
                <header>
                    <Link to="/"> Home </Link>
                    <Link to="/introduction"> Introduction </Link>
                    <Link to='/addEatery'> Add Eatery</Link>
                    <Link to="/comments"> Comments </Link>
                    <Link to="/comments-list"> Comments List </Link>
                    <Link to="/eateries-list"> Eatery List </Link>
                    <Navigation />
                </header>

                <main>
                    <Route exact path="/" render={() => <Home />} />
                    <Route exact path="/introduction" render={() => <Introduction />} />
                    <Route exact path='/addEatery' render={() => <Eateries
                        handleEateryChange={this.handleEateryChange}
                        handleEaterySubmit={this.handleEaterySubmit}
                        eateryFormData={this.state.eateryFormData}
                    />} />


                    <Route exact path="/comments" render={() => <CommentsForm
                        handleChange={this.handleCommentFormChange}
                        handleSubmit={this.handleCommentFormSubmit}
                    />} />


                    <Route exact path="/comments-list" render={() => <CommentsList
                        comments={this.state.comments}
                        commentUpdateFormData={this.state.commentUpdateFormData}
                        handleUpdate={this.handleCommentUpdate}
                        handleChange={this.handleCommentUpdateChange}
                        handleSubmit={this.handleCommentUpdateSubmit}
                        handleCancel={this.handleCommentCancel}
                    />} />
                    <Route exact path="/eateries-list" render={() => <EateriesList
                        eateries={this.state.eateries}
                        eateryUpdateFormData={this.state.eateryUpdateFormData}
                        handleUpdate={this.handleEateryUpdate}
                        handleChange={this.handleEateryUpdateChange}
                        handleSubmit={this.handleEateryUpdateSubmit}
                        handleCancel={this.handleEateryCancel}
                    />} />
                </main>

                <footer>
                    <HireUs />
                </footer>

            </div>
        );
    }

}

export default App;