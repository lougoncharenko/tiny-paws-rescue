import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import data from '../../data/services.json'

import './Services.css'

const Services = () => {
  return (
    <section className="services">
        <Container>
            <Row>
                {data.map((item, index) => 
                    <Col lg='3' md='5' key={index}>
                        <div 
                        whileHover={{scale: 1.1}}
                        className="service_item"
                        style={{
                            color: 'white',
                            background:'#8B4513'}}>
                            <span><i class={item.icon}></i></span>
                            <div>
                                <h3 
                                   style={{
                                    color: 'white'}}>
                                {item.title}</h3>
                        
                            </div>
                        </div>
                    </Col>
                )}
                
            </Row>
        </Container>
    </section>
  );
}

export default Services;
