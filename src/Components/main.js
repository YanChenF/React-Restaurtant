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
import { addComment} from '../redux/ActionCreators';

class Main extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const Homepage = (props) => {
            return (
                <Home dish={this.props.dishes.filter((dish) => dish.featured)[0]}
                promo={this.props.promotions.filter((promotion) => promotion.featured)[0]}
                leader={this.props.leaders.filter((leader) => leader.featured)[0]}
                />
            );
        }

        const DishById = ({match}) => {
            return (
                <DishDetail dish={this.props.dishes.filter((dish) => dish.id === parseInt(match.params.id, 10))[0]}
                comments={this.props.comments.filter((comment) => comment.dishId === parseInt(match.params.id, 10))}
                addComment={this.props.addComment}/>
            );
        }

        return (<div>
            <Header />
            <Switch>
                <Route path="/home" component={Homepage}/>
                <Route exact path="/menu" component={() => <Menu dishes={this.props.dishes}/>}/>
                <Route path='/contact' component={Contact} />
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

const mapDispatchToProps = (dispatch) => ({
    addComment: (dishId, rating, author, comment) => dispatch(addComment(dishId, rating, author, comment))
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));