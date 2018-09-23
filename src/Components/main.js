import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import Menu from './menu';
import Header from './header';
import Footer from './footer';
import DishDetail from './dishdetail';
import { DISHES } from '../shared/dishes';
import { COMMENTS } from '../shared/comments';
import { PROMOTIONS } from '../shared/promotions';
import { LEADERS } from '../shared/leaders';
import About from './about';

import Home from './home';
import Contact from './contactus';

export default class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dishes: DISHES,
            comments: COMMENTS,
            leaders: LEADERS,
            promotions: PROMOTIONS
        };
        this.onDishselect = this.onDishselect.bind(this);
    }

    onDishselect(dish) {
       this.setState({selectedDish: dish});

    }

    render() {
        const Homepage = (props) => {
            return (
                <Home dish={this.state.dishes.filter((dish) => dish.featured)[0]}
                promo={this.state.promotions.filter((promotion) => promotion.featured)[0]}
                leader={this.state.leaders.filter((leader) => leader.featured)[0]}
                />
            );
        }

        const DishById = ({match}) => {
            return (
                <DishDetail dish={this.state.dishes.filter((dish) => dish.id === parseInt(match.params.id, 10))[0]}
                comments={this.state.comments.filter((comment) => comment.dishId === parseInt(match.params.id, 10))}/>
            );
        }

        return (<div>
            <Header />
            <Switch>
                <Route path="/home" component={Homepage}/>
                <Route exact path="/menu" component={() => <Menu dishes={this.state.dishes}
                onClick={this.onDishselect} />}/>
                <Route path='/contact' component={Contact} />
                <Route path='/menu/:id' component={DishById} />
                <Route path='/about' component={() => <About leaders={this.state.leaders} />} />
                <Redirect to="/home" />
            </Switch>
            <Footer />
        </div>);
        
    };
}