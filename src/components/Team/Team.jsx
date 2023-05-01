import React from "react";
import { Container, Row, Col } from "reactstrap";
import Card from '@mui/material/Card';
import Toolbar from '@mui/material/Toolbar';
import { createTheme, ThemeProvider} from '@mui/material/styles';
import Typography from '@mui/material/Typography';

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

function TeamSection () {
    let message = `Meet the amazing team that makes Tiny Paws Rescue the best place to work and adopt from.`;
    return (
    <ThemeProvider theme={theme}>
    <Toolbar>
    </Toolbar>
    <section class="section-white">
      <Container>
     
          <Row>
          <Typography style={{
            margin: "20px",
            textAlign: "center",
            fontSize: '2rem'
          }} 
          gutterBottom variant="h2" component="h2">
            The Team Behind Tiny Paws Rescue
          </Typography>
              <p 
              style={{
                margin: '20px',
                fontSize: '0.9rem',
                textAlign: 'center',
              }}
              class="section-subtitle">{message}</p>     
          <Col >
          <Card
          style={{
            padding: '25px',
            display: 'flex',
            alignItems: 'center',
          }}
          sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
                <img 
                style= {{
                  marginBottom: '20px',
                }}
                src="https://demo.epic-webdesign.com/tf-pacifico/v1/images/team1a.jpg" 
                alt="pic" />                   
                <h3>JOHNATHAN HAWKINS</h3>            
                <div class="team-info"><p>Co-founder</p></div>
                <p>Johnathan is our  co-founder and has been passionate about building this company and finding every dog a forever home for over five years.</p>
            </Card>
          </Col> 
          <Col >
          <Card
          style={{
            padding: '25px',
            display: 'flex',
            alignItems: 'center',
          }}
          sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
                <img 
                style= {{
                  marginBottom: '20px',
                }}
                src="https://demo.epic-webdesign.com/tf-pacifico/v1/images/team2a.jpg"
                alt="pic" />
                <h3>ALEXANDRA SMITHS</h3>
                <div class="team-info"><p>Main Vet</p></div>
                <p>Graduating with a Doctor of Veterinary Medicine degree, Alexandra has always loved working with dogs and now she’s lucky enough to do it as part of her job.</p>
            </Card>
          </Col> 
          <Col >
          <Card
          style={{
            padding: '25px',
            display: 'flex',
            alignItems: 'center',
          }}
          sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
                <img 
                style= {{
                  marginBottom: '20px',
                }}
                src="https://demo.epic-webdesign.com/tf-pacifico/v1/images/team3a.jpg" 
                alt="pic" />
                <h3>ELISA JOHANSON</h3> 
                <div class="team-info"><p>Dog SPecialist</p></div>
                <p>Elisa first fell in love with Tiny Paws a couple of years ago when he volunteered here a couple of years ago. From volunteer to working as a full-time dog specialist, Elias rose quick and has done every job with passion. </p> 
            </Card>
          </Col> 
        </Row> 
      </Container> 
    </section></ThemeProvider>
    )
}

export default TeamSection;
