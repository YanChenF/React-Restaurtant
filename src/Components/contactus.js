import React, { Component } from 'react';
import { Breadcrumb, BreadcrumbItem, Form, FormFeedback, FormGroup, Input, Label, 
    Button, Col } from 'reactstrap';
import { Link } from 'react-router-dom';

class Contact extends Component {
    constructor(props) {
        super(props);
        this.state = {
            firstname : '',
            lastname : '',
            phone : '',
            email : '',
            agree : false,
            contactType : 'Phone',
            message : ''
        };
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleInputChange(event) {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
        this.setState({
            [name]: value
        })
    }

    handleSubmit(event) {
        const output = JSON.stringify(this.state);
        console.log(output);
        alert(output);
        event.preventDefault();
    }

    render() {
        return(
            <div className="container">
                <div className='row'>
                    <Breadcrumb>
                        <BreadcrumbItem><Link to='/home'>Home</Link></BreadcrumbItem>
                        <BreadcrumbItem active>Contact</BreadcrumbItem>
                    </Breadcrumb>
                    <div className='col-12'>
                        <h3>Contact Us</h3>
                        <hr />
                    </div>
                </div>
                <div className="row row-content">
                    <div className="col-12">
                    <h3>Location Information</h3>
                    </div>
                    <div className="col-12 col-sm-4 offset-sm-1">
                            <h5>Our Address</h5>
                            <address>
                            121, Clear Water Bay Road<br />
                            Clear Water Bay, Kowloon<br />
                            HONG KONG<br />
                            <i className="fa fa-phone"></i>: +852 1234 5678<br />
                            <i className="fa fa-fax"></i>: +852 8765 4321<br />
                            <i className="fa fa-envelope"></i>: <a href="mailto:confusion@food.net">confusion@food.net</a>
                            </address>
                    </div>
                    <div className="col-12 col-sm-6 offset-sm-1">
                        <h5>Map of our Location</h5>
                    </div>
                    <div className="col-12 col-sm-11 offset-sm-1">
                        <div className="btn-group" role="group">
                            <a role="button" className="btn btn-primary" href="tel:+85212345678"><i className="fa fa-phone"></i> Call</a>
                            <a role="button" className="btn btn-info"><i className="fa fa-skype"></i> Skype</a>
                            <a role="button" className="btn btn-success" href="mailto:confusion@food.net"><i className="fa fa-envelope-o"></i> Email</a>
                        </div>
                    </div>
                </div>
                <div className='row row-content'>
                    <div className='col-12'>
                        <h4>Send us your feedback!</h4>
                    </div>
                    <div className='col-12 col-md-9'>
                        <Form onSubmit={this.handleSubmit}>
                            <FormGroup row>
                                <Label htmlFor='firstname' md={2}>First name:</Label>
                                <Col md={10}><Input type='text' placeholder='firstname' 
                                value={this.state.firstname}
                                name='firstname' 
                                id='firstname'
                                onChange={this.handleInputChange} />
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label htmlFor='lastname' md={2}>Last name:</Label>
                                <Col md={10}><Input type='text' placeholder='lastname' 
                                value={this.state.lastname}
                                name='lastname' 
                                id='lastname'
                                onChange={this.handleInputChange} />
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label htmlFor='phone' md={2}>Phone:</Label>
                                <Col md={10}><Input type='tel' placeholder='phone' 
                                value={this.state.phone}
                                name='phone' 
                                id='phone'
                                onChange={this.handleInputChange} />
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label htmlFor='email' md={2}>Email:</Label>
                                <Col md={10}><Input type='email' placeholder='email' 
                                value={this.state.email}
                                name='email' 
                                id='email'
                                onChange={this.handleInputChange} />
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Col md={{size: 6, offset: 2}}>
                                <FormGroup check><Label check> 
                                <Input type='checkbox'  
                                checked={this.state.agree}
                                name='agree' 
                                onChange={this.handleInputChange} />May we contact you? </Label>
                                </FormGroup>
                                </Col>
                                <Col md={{size: 3, offset: 1}}>
                                <Input type='select'  
                                value={this.state.contactType}
                                name='contactType' 
                                onChange={this.handleInputChange} >
                                <option>Phone</option>
                                <option>Email</option>
                                </Input>
                                </Col>                               
                            </FormGroup>
                            <FormGroup row>
                                <Label htmlFor='message' md={2}>Message:</Label>
                                <Col md={10}><Input type='textarea'
                                value={this.state.message}
                                rows='12'
                                name='message' 
                                id='message'
                                onChange={this.handleInputChange} />
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Col md={{size: 10, offset: 2}} >
                                    <Button type='submit'>Submit</Button>
                                </Col>
                            </FormGroup>
                        </Form>
                    </div>

                </div>
            </div>
        );
    }
    
}

export default Contact;