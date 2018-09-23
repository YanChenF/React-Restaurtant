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
        return (<div>
            <Header />
            <Switch>
                <Route path="/home" component={Homepage}/>
                <Route exact path="/menu" component={() => <Menu dishes={this.state.dishes}
                onClick={this.onDishselect} />}/>
                <Route path='/contact' component={Contact} />
                <Redirect to="/home" />
            </Switch>
            <DishDetail dish={this.state.selectedDish}/>
            <Footer />
        </div>);
        
    };
}