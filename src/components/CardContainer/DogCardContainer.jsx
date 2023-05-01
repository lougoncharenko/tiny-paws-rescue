import React from 'react';
import {  Container, Row } from 'reactstrap';
import DogCards from '../Card/DogCard';
import data from '../../data/dogs.json'


const DogCardContainer = () => {
  return (
      <Container>
          <Row>
          {data.map((item, index)=> 
          <DogCards  item={item} key={index} />  
          )}
          </Row>
      </Container>
  );
}

export default DogCardContainer;