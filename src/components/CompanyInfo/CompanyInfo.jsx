
 

import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import Toolbar from '@mui/material/Toolbar';


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

export default function CompanyInfo() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <section
      style={{
        display: 'flex',
        justifyContent: 'center'
      }}>
      <Container style={{
        padding: '25px',
        margin: "35px",
        border: "2px solid #8B4513"
      }}
      maxWidth="lg">
      <Typography variant="h6" gutterBottom>
        About our company:
      </Typography>
      <Divider />
        <Typography variant="p" gutterBottom>
        <p>Dear potential pet owner, </p>
        <p> We are thrilled to have the opportunity to share with you why you should adopt a dog from us. Adopting a dog is a wonderful decision that can bring so much joy and companionship into your life, and we truly believe that we have the perfect furry friend waiting for you.
        Here are just a few reasons why you should adopt a dog from us:</p>
        <ol>
          <li>
            We have a wide selection of amazing dogs: We have dogs of all ages, breeds, and sizes, so whether you're looking for a small lap dog or a big, active companion for outdoor adventures, we have the perfect match for you.
          </li>
          <li>
            Our dogs are fully vetted: All of our dogs are thoroughly vetted, spayed or neutered, and up to date on all of their vaccinations, so you can rest assured that your new pet is healthy and ready to join your family.
          </li>
          <li>
            We provide ongoing support: We are committed to providing ongoing support to all of our adopters. We offer resources and guidance to help you integrate your new pet into your home and ensure a successful adoption.
          </li>
          <li>
            You'll be saving a life: When you adopt a dog from us, you're giving a second chance to a dog in need. Every year, millions of dogs are euthanized in shelters because they don't have homes. By adopting from us, you're helping to reduce the number of dogs that are needlessly put to sleep.
          </li>
          <li>
            Dogs bring so much joy into our lives: There's no denying that dogs bring so much happiness, love, and laughter into our lives. They're always there for us, providing us with unconditional love and support, and helping us to lead more active and fulfilling lives.
          </li>
        </ol>
        <p>We hope that you'll consider adopting a dog from us. We know that you'll be so glad you did. Thank you for considering giving a loving home to one of our amazing dogs.</p>
        <p>Best regards,</p>
        <p>Tiny Paws rescue</p>
        </Typography>
      </Container>
      </section>
      <Toolbar></Toolbar>
    </ThemeProvider>
  );
}