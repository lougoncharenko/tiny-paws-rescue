import React from 'react';
import { Container, Row , Col} from 'reactstrap';
import DogCardContainer from '../components/CardContainer/DogCardContainer';
import AppBar from '@mui/material/AppBar';
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';
import { createTheme, ThemeProvider } from '@mui/material/styles';

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
  },
});

const Dogs = () => {
  return (
    <ThemeProvider theme={theme}>
    <Toolbar> </Toolbar>
    <Container
      style ={{
        marginTop: "50px",

      }}>
      <Row
      style ={{
        display: "flex",
        marginBottom: "15px",

      }}>
        <Col> 
          <DogCardContainer />
        </Col>
       
      </Row>
    </Container>
    <Toolbar> </Toolbar>
  </ThemeProvider>
  );
}

export default Dogs;
