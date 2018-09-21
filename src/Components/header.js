import React, { Component } from 'react';
import { Navbar , NavbarBrand, Jumbotron } from 'reactstrap';

export default class Header extends Component {
    render() {
        return (
            <React.Fragment>
                <Navbar dark color="primary">
                    <div className="container">
                        <NavbarBrand href="/">Restaurant</NavbarBrand>
                    </div>
                </Navbar>
                <Jumbotron>
                    <div className="container">
                        <div className="row row-header">
                            <div className="col-12 col-sm-6">
                                <h1>Restaurant</h1>
                                <p>We take inspiration from the World's best cuisines, and create a unique fusion experience. Our lipsmacking creations will tickle your culinary senses!
                                    
                                </p>

                            </div>
                        </div>
                    </div>
                </Jumbotron>
            </React.Fragment>
            
        );
    }
}