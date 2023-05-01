import React from "react"; 
import { Container, Row, Col } from "react-bootstrap";
import {  toast } from 'react-toastify';
import { contactConfig } from "../ContactInfo/ContactInfo";
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

export default function ContactUs() {
  const handleRefresh = () => {
    window.location.reload();
  }
  const handleSubmit = (event) => {
    event.preventDefault();
    toast.success('Form submitted successfully');
    setTimeout(handleRefresh, 3050);
  }

  return (
    <ThemeProvider theme={theme}>
    <CssBaseline />
    <AppBar position="relative" color="primary">
      <Toolbar>
      </Toolbar>
    </AppBar>
      <Container>
        <Row className="mb-5 mt-3">
          <Col lg="8">
            <h1 className="display-4 mb-4">Contact Our Organization</h1>
            <hr className="t_border my-4 ml-0 text-left" />
          </Col>
        </Row>
        <Row className="sec_sp">
          <Col lg="5" className="mb-5">
            <h4 className="color_sec py-4">Get in touch with us</h4>
            <address>
              <strong>Email:</strong>{" "}
              <a href={`mailto:${contactConfig.YOUR_EMAIL}`}>
                {contactConfig.YOUR_EMAIL}
              </a>
              <br />
              <br />
              {contactConfig.hasOwnProperty("YOUR_PHONE") ? (
                <p>
                  <strong>Phone:</strong> {contactConfig.YOUR_PHONE}
                </p>
              ) : (
                ""
              )}
               {contactConfig.hasOwnProperty("ADDRESS") ? (
                <p
                style={{
                  paddingTop: "15px"
                }}>
                  <strong>Address:</strong> {contactConfig.ADDRESS}
                </p>
              ) : (
                ""
              )}
            </address>
            <p>{contactConfig.description}</p>
          </Col>
          <Col lg="7" className="d-flex align-items-center">
            <form  
            onSubmit={handleSubmit}
            className="contact__form w-100">
              <Row>
                <Col lg="6" className="form-group">
                  <input
                    className="form-control"
                    id="name"
                    name="name"
                    placeholder="Name" 
                    type="text"
                    required 
                  />
                </Col>
                <Col lg="6" className="form-group">
                  <input
                    className="form-control rounded-0"
                    id="email"
                    name="email"
                    placeholder="Email"
                    type="email" 
                    required 
                  />
                </Col>
              </Row>
              <textarea
                className="form-control rounded-0"
                id="message"
                name="message"
                placeholder="Message"
                rows="5" 
                required
              ></textarea>
              <br />
              <Row>
                <Col lg="12" className="form-group">
                  <button 
                  style ={{
                    padding: '2px',
                    backgroundColor: 'white',
                    color: 'black',
                    border: "2px solid #8B4513",
                  }}
                  type="submit"> 
                  Submit Form
                  </button>
                </Col>
              </Row>
            </form>
          </Col>
        </Row>
      </Container>
      <Toolbar></Toolbar>
      </ThemeProvider>
  );
}