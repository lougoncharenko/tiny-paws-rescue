import React from 'react';
import { Container, Row , Col} from 'reactstrap';
import DogCardContainer from '../components/CardContainer/DogCardContainer';

const Dogs = () => {
  return (
    <section>
    <Container>
      <Row
      style ={{
        display: "flex",

      }}>
        <Col> <DogCardContainer />
        </Col>
       
      </Row>
    </Container>
  </section>
  );
}

export default Dogs;
