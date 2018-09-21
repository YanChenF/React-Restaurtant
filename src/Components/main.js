import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Menu from './menu';
import Header from './header';
import Footer from './footer';
import DishDetail from './dishdetail';
import { DISHES } from '../shared/dishes';

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
        return (<div>
            <Header />
            <Menu onClick={this.onDishselect} dishes={this.state.dishes} />
            <DishDetail dish={this.state.selectedDish}/>
            <Footer />
        </div>);
        
    };
}