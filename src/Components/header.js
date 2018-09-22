import React, { Component } from 'react';
import { Nav, Navbar , NavbarBrand, NavbarToggler, NavItem, Collapse, Jumbotron } from 'reactstrap';
import { NavLink } from 'react-router-dom';
export default class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isOpen: false
        };
        this.toggle = this.toggle.bind(this);
    }

    toggle() {
        this.setState({isOpen: !this.state.isOpen});
    }

    render() {
        return (
            <React.Fragment>
                <Navbar dark color="primary" expand="md">
                    <div className="container">
                        <NavbarToggler onClick={this.toggle}/>
                        <NavbarBrand className="mr-auto" href="/"><img src='assets/images/logo.png' height="30" width="41" alt='Ristorante Con Fusion' /></NavbarBrand>
                        <Collapse isOpen={this.state.isOpen} navbar>
                            <Nav navbar>
                                <NavItem>
                                    <NavLink to="/home" className="nav-link"><span className="fa fa-home fa-lg"> Home</span>
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink to="/menu" className="nav-link"><span className="fa fa-list fa-lg"> Menu</span>
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink to="/about" className="nav-link"><span className="fa fa-info fa-lg"> About </span>
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink to="/contact" className="nav-link"><span className="fa fa-address-card fa-lg"> Contact</span>
                                    </NavLink>
                                </NavItem>
                            </Nav>
                        
                        </Collapse>
                        
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