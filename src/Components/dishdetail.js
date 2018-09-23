import React from 'react';
import { Card, CardImg, CardText, CardBody,
    CardTitle, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';

function renderComments(comments) {
        if(comments.length <= 0) return <div></div>;
        return comments.map((comment) => {
            const date = new Date(comment.date);
            return <li key={comment.id}>
                <p>{comment.comment}</p>
                <p>--{comment.author}, {date.toLocaleDateString()}</p>
            </li>
        });
    }

function renderDish(dish) {
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

const DishDetail = ({dish, comments}) => {
    // const dish  = props.dish;     
    //     if(!dish) {
    //         return <div></div>;
    //     }
    //     const comments = props.comments;
    //     console.log(comments);
        return(
        <div className='container'>
            <div className='row'>
                <Breadcrumb>
                    <BreadcrumbItem><Link to='/home'>Home</Link></BreadcrumbItem>
                    <BreadcrumbItem><Link to='/menu'>Menu</Link></BreadcrumbItem>
                    <BreadcrumbItem active>{dish.name}</BreadcrumbItem>
                </Breadcrumb>
                <div className='col-12'>
                    <h3>{dish.name}</h3>
                    <hr />
                </div>
            </div>
            <div className='row'>
                <div className='col-12 col-md-5 m-1'>
                    {renderDish(dish)}
                </div>
                <div className='col-12 col-md-5 m-1'>
                    <h4>Comments</h4>
                    <ul className='list-unstyled'>
                        {renderComments(comments)}
                    </ul>
                </div>
            </div>
        </div>
        );
}

export default DishDetail;