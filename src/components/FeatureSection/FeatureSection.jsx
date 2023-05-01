import React from "react";
import { Container, Row, Col } from "reactstrap";
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';

import { createTheme, ThemeProvider} from '@mui/material/styles';

const theme = createTheme();

function FeatureSection () {
    return (
    <ThemeProvider theme={theme}>
    <section class="section-white">
      <Container>
          <Row>
          <Typography style={{
            margin: "20px",
            textAlign: "center",
            fontSize: '2rem'
          }} 
          gutterBottom variant="h2" component="h2">
            Benefits of owning a dog
          </Typography>  
          <Col lg='4' md='6'>
          <Card
          style={{
            padding: '25px',
            display: 'flex',
            alignItems: 'center',
            margin: '15px'
          }}
          sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
                <img 
                style= {{
                  marginBottom: '20px',
                }}
                src="https://www.thesprucepets.com/thmb/LPUxuEE-eV8hIdUIh8QxyI3jaco=/3000x0/filters:no_upscale():strip_icc()/rules-for-walking-your-dog-1117437-01-9e2d4548f974456db20e7c5abe1c3291.jpg" 
                alt="pic" />                   
                <h3
                style={{
                  fontSize: '25px',
                  marginBottom: '15px',
                }}>Dogs encourage you to move</h3>            
                <p>Those daily walks on thesidewalks, trails, and paths add up. A 2019 British study discovered that dog owners are nearly four times more likely than non-dog owners to meet daily physical activity guidelines.
                  Dog owners spend nearly 300 minutes every week walking with their dogs, that's more than non-dog owners. </p>
            </Card>
          </Col> 
          <Col lg='4' md='6'>
          <Card
          style={{
            padding: '25px',
            display: 'flex',
            alignItems: 'center',
            margin: '15px'
          }}
          sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
                <img 
                style= {{
                  marginBottom: '20px',
                }}
                src="https://www.akc.org/wp-content/uploads/2017/12/Yellow-Lab-High-Five.jpg"
                alt="pic" />
                <h3
                style={{
                  fontSize: '25px',
                  marginBottom: '15px'
                }}>Dogs help lower your stress</h3>            
                <p>Your canine companion can offer comfort and ease your worries. Multiple studies show that dogs and therapy dogs help alleviate stress and anxiety.
                  Even just petting a familiar dog lowers blood pressure, heart rate, slows breathing, and relaxes muscle tension.</p>
            </Card>
          </Col> 
          <Col lg='4' md='6'>
          <Card
          style={{
            padding: '25px',
            display: 'flex',
            alignItems: 'center',
            margin: '15px'
          }}
          sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
                <img 
                style= {{
                  marginBottom: '20px',
                }}
                src="https://hhpros.com/web/wp-content/uploads/2020/01/066a6cd3-3d05-4bde-a41a-2f9ce51bd8ed.jpg" 
                alt="pic" />
               <h3
                style={{
                  fontSize: '25px',
                  marginBottom: '15px'
                }}>Dogs make us feel less alone.</h3>            
                <p>Dogs can be there for you even when people can’t. They offer unconditional love, emotional support, and constant cuddles that help stave off social isolation. A small Australian study discovered that dog ownership reduces loneliness and decreases social isolation.</p>
            </Card>
          </Col> 
        </Row> 
      </Container> 
    </section></ThemeProvider>
    )
}

export default FeatureSection;