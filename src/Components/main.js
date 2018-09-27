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
import { addComment, fetchDishes } from '../redux/ActionCreators';
import { actions } from 'react-redux-form';

class Main extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.fetchDishes();
    }

    render() {
        const Homepage = (props) => {
            return (
                <Home dish={this.props.dishes.dishes.filter((dish) => dish.featured)[0]}
                dishesLoading={this.props.dishes.isLoading}
                dishesErrMess={this.props.dishes.errMess}
                promo={this.props.promotions.filter((promotion) => promotion.featured)[0]}
                leader={this.props.leaders.filter((leader) => leader.featured)[0]}
                />
            );
        }

        const DishById = ({match}) => {
            return (
                <DishDetail dish={this.props.dishes.dishes.filter((dish) => dish.id === parseInt(match.params.id, 10))[0]}
                isLoading={this.props.dishes.isLoading}
                errMess={this.props.dishes.errMess}
                comments={this.props.comments.filter((comment) => comment.dishId === parseInt(match.params.id, 10))}
                addComment={this.props.addComment}/>
            );
        }

        return (<div>
            <Header />
            <Switch>
                <Route path="/home" component={Homepage}/>
                <Route exact path="/menu" component={() => <Menu dishes={this.props.dishes}/>}/>
                <Route path='/contact' component={() => <Contact resetFeedbackForm={this.props.resetFeedbackForm}/>} />
                <Route path='/menu/:id' component={DishById} />
                <Route path='/about' component={() => <About leaders={this.props.leaders} />} />
                <Redirect to="/home" />
            </Switch>
            <Footer />
        </div>);
        
    };
}

function mapStateToProps({dishes, promotions, leaders, comments}) {
    return {dishes, promotions, leaders, comments};
}

const mapDispatchToProps = (dispatch) => {
    return {
        addComment: (dishId, rating, author, comment) => dispatch(addComment(dishId, rating, author, comment)),
        fetchDishes: () => { dispatch(fetchDishes())},
        resetFeedbackForm: () => { dispatch(actions.reset('feedback'))}
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));