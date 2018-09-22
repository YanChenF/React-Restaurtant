import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import Menu from './menu';
import Header from './header';
import Footer from './footer';
import DishDetail from './dishdetail';
import { DISHES } from '../shared/dishes';
import Home from './home';

export default class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dishes: DISHES,
            selectedDish: null
        };
        this.onDishselect = this.onDishselect.bind(this);
    }

    onDishselect(dish) {
       this.setState({selectedDish: dish});

    }

    render() {
        const Homepage = (props) => {
            return (
                <Home />
            );
        }
        return (<div>
            <Header />
            <Switch>
                <Route path="/home" component={() => <Home />}/>
                <Route exact path="/menu" component={() => <Menu dishes={this.state.dishes}
                onClick={this.onDishselect} />}/>
                <Redirect to="/home" />
            </Switch>
            <DishDetail dish={this.state.selectedDish}/>
            <Footer />
        </div>);
        
    };
}