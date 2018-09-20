import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody,
    CardTitle } from 'reactstrap';
import DishDetail from './dishdetail';

class Menu extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedDish: null
        };
        
    }

    onDishselect(dish) {
       
        this.setState({selectedDish: dish});
    }

    render() {
        const menu = this.props.dishes.map((dish) => {
            return (<div className='col-12 col-md-5 m-1' key={dish.id}>
                <Card onClick={() => this.onDishselect(dish)}>
                    <CardImg top width='100%' src={dish.image} alt={dish.name}/>
                    <CardImgOverlay>
                        <CardTitle>{dish.name}</CardTitle>
                    </CardImgOverlay>
                </Card>
            </div>);
        });

        return (
            <div className='container'>
                <div className='row'>
                    {menu}
                </div>
                    <DishDetail dish={this.state.selectedDish}/>
            </div>
        );
    }
}

export default Menu;