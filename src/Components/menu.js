import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody,
    CardTitle } from 'reactstrap';

function Menu (props) {
    const menu = props.dishes.map((dish) => {
        return (<div className='col-12 col-md-5 m-1' key={dish.id}>
            <Card onClick={() => props.onClick(dish)}>
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
        </div>
    );


}

    


export default Menu;