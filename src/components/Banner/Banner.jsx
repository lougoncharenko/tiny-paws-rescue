import React from 'react';
import {Link } from 'react-router-dom'
import { Container, Row, Col } from 'reactstrap';
import './Banner.css'
import Toolbar from '@mui/material/Toolbar';
import { createTheme, ThemeProvider} from '@mui/material/styles';


const theme = createTheme({
  components: {
    // Name of the component
    MuiToolbar: {
      styleOverrides: {
        // Name of the slot
        root: {
          // Some CSS
          backgroundColor: '#8B4513'
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        // Name of the slot
        root: {
          // Some CSS
          backgroundColor: '#8B4513',
          color: 'white'
        },
      },
    },
  },
});

const Banner = () => {
  const year = new Date().getFullYear();
  return (
    <ThemeProvider theme={theme}>
    <Toolbar></Toolbar>
    <section className="hero_section">
    <Container
    style={{
      padding: '15px',
      border: '5px solid black'
    }}>
      <Row
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        marginBottom: '-150px'
      }}>
        <Col lg='8' md='8' className='left'>
          <div className="hero_content">
            <h2>Why adopt from Tiny Paws?</h2>
            <p> Adopting a dog from us is not only a compassionate decision but also a responsible one. 
              Our organization takes great care to ensure that each dog we place in a new home is healthy, 
              well-adjusted, and ready to be a loving companion. By adopting from us, you'll not only be giving
              a deserving animal a second chance at a happy life, but you'll also be supporting our efforts 
              to rescue and care for more dogs in need. Plus, the joy and unconditional love that a dog can 
              bring into your life is priceless. So why not make a difference in both your life and a dog's 
              life by adopting from us today?</p>
              
              <button 
              className='buy_btn'>
                <Link to='/about'>Find out More</Link>
                </button>
          </div>
        </Col>
        <Col lg='4' md='8'>
          <div className="hero_img">
            <img src="https://publish.purewow.net/wp-content/uploads/sites/2/2021/03/best-companion-dogs-samoyed.jpeg" alt="fitness-bundle" />
          </div>
        </Col>
      </Row>
    </Container>
  </section>
  </ThemeProvider>
  );
}

export default Banner;
