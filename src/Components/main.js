import React, { Component } from 'react';
import { Route, Switch, Redirect, withRouter } from 'react-router-dom';
import Menu from './menu';
import Header from './header';
import Footer from './footer';
import DishDetail from './dishdetail';
import About from './about';
import Home from './home';
import Contact from './contactus';
import { connect } from 'react-redux';
import { postComment, postFeedback, fetchDishes, fetchComments, fetchLeaders, fetchPromos } from '../redux/ActionCreators';
import { actions } from 'react-redux-form';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

class Main extends Component {

    componentDidMount() {
        this.props.fetchDishes();
        this.props.fetchComments();
        this.props.fetchPromos();
        this.props.fetchLeaders();
    }

    render() {
        const Homepage = (props) => {
            return (
                <Home dish={this.props.dishes.dishes.filter((dish) => dish.featured)[0]}
                dishesLoading={this.props.dishes.isLoading}
                dishesErrMess={this.props.dishes.errMess}
                promo={this.props.promotions.promotions.filter((promotion) => promotion.featured)[0]}
                promosLoading={this.props.promotions.isLoading}
                promosErrMess={this.props.promotions.errMess}
                leader={this.props.leaders.leaders.filter((leader) => leader.featured)[0]}
                leadersLoading={this.props.leaders.isLoading}
                leadersErrMess={this.props.leaders.errMess}
                />
            );
        }

        const DishById = ({match}) => {
            return (
                <DishDetail dish={this.props.dishes.dishes.filter((dish) => dish.id === parseInt(match.params.id, 10))[0]}
                isLoading={this.props.dishes.isLoading}
                errMess={this.props.dishes.errMess}
                comments={this.props.comments.comments.filter((comment) => comment.dishId === parseInt(match.params.id, 10))}
                commentsErrMess={this.props.comments.errMess}
                addComment={this.props.postComment}/>
            );
        }

        return (<div>
            <Header />
            <TransitionGroup>
                <CSSTransition key={this.props.location.key} classNames='page' timeout={300} >
                    <Switch location={this.props.location}>
                        <Route path="/home" component={Homepage}/>
                        <Route exact path="/menu" component={() => <Menu dishes={this.props.dishes}/>}/>
                        <Route path='/contact' component={() => <Contact resetFeedbackForm={this.props.resetFeedbackForm}
                        addFeedback={this.props.postFeedback}/>} />
                        <Route path='/menu/:id' component={DishById} />
                        <Route path='/about' component={() => <About leaders={this.props.leaders} />} />
                        <Redirect to="/home" />
                    </Switch>
                </CSSTransition>
            </TransitionGroup>
            
            <Footer />
        </div>);
        
    };
}

function mapStateToProps({dishes, promotions, leaders, comments}) {
    return {dishes, promotions, leaders, comments};
}

const mapDispatchToProps = (dispatch) => {
    return {
        postComment: (dishId, rating, author, comment) => dispatch(postComment(dishId, rating, author, comment)),
        postFeedback: (values) => dispatch(postFeedback(values)),
        fetchDishes: () => { dispatch(fetchDishes())},
        resetFeedbackForm: () => { dispatch(actions.reset('feedback'))},
        fetchComments: () => { dispatch(fetchComments())},
        fetchPromos: () => { dispatch(fetchPromos())},
        fetchLeaders: () => { dispatch(fetchLeaders())}
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));