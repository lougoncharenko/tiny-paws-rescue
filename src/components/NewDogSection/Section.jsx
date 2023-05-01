import React from 'react';
import { Container, Row } from 'reactstrap';
import Cards from './Cards';
import Data from '../../data/newdogs.json'
import Typography from '@mui/material/Typography';
import './TrendingProducts.css'

const NewDogSection = () => {
  return (
    <Container>
        <Row>
         <Typography style={{margin: "20px", textAlign: "center"}} 
         gutterBottom variant="h2" component="h2">
                    New Dogs At Our Rescue:
                    </Typography>
        {Data.map((item, index)=> 
         <Cards item={item}  key={index} s/>  
        )}
        </Row>
    </Container>
  );
}

export default NewDogSection;
