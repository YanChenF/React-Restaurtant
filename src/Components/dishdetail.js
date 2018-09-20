import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody,
    CardTitle } from 'reactstrap';

class DishDetail extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dish: null
        };
    }

    renderComments(comments) {
        if(comments.length <= 0) return <div></div>;
        return comments.map((comment) => {
            const date = new Date(comment.date);
            return <li>
                <p>{comment.comment}</p>
                <p>--{comment.author}, {date.toLocaleDateString()}</p>
            </li>
        })

        ;
    }

    renderDish(dish) {
        return (
            <Card>
                <CardImg top width='100%' src={dish.image} alt={dish.name} />
                <CardBody>
                    <CardTitle>{dish.name}</CardTitle>
                    <CardText>{dish.description}</CardText>
                </CardBody>
            </Card>
        );
    }

    render() { 
        const dish  = this.props.dish;     
        if(!dish) {
            return <div></div>;
        }
        const comments = dish.comments;
        return(<div className='row'>
            <div className='col-12 col-md-5 m-1'>
                {this.renderDish(dish)}
            </div>
            <div className='col-12 col-md-5 m-1'>
                <h4>Comments</h4>
                <ul className='list-unstyled'>
                    {this.renderComments(comments)}
                </ul>
            </div>
        </div>
            
        );
    }
}

export default DishDetail;