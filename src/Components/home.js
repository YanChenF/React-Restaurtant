import React from 'react';
import { Card, CardImg, CardTitle, CardSubtitle, CardText, CardBody } from 'reactstrap';
import { Loading } from './loading';
import { baseUrl } from '../shared/baseUrl';


function RenderCard({item, isLoading, errMess}) {
    if(isLoading) {
        return <Loading />;
    } else if(errMess) {
        return <p>{errMess}</p>
    } else 
    return (<div>
            <Card>
                <CardImg top width='100%' src={baseUrl + item.image} alt={item.name}/>
                <CardBody>
                    <CardTitle>{item.name}</CardTitle>
                    {item.designation? <CardSubtitle>{item.designation}</CardSubtitle> : null}
                    <CardText>{item.description}</CardText>
                </CardBody>
            </Card>
        </div>);
}

 const Home = (props) => {
     console.log(props);
    return (
        <div className='container'>
            <div className='row align-items-stretch'>
                <div className='col-12 col-md m-1'><RenderCard item={props.dish} 
                    isLoading={props.dishesLoading} errMess={props.dishesErrMess}
                /></div>
                <div className='col-12 col-md m-1'><RenderCard item={props.promo}/></div>
                <div className='col-12 col-md m-1'><RenderCard item={props.leader}/></div>
            </div>
        </div>
        
    );
}

export default Home;