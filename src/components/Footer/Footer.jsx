import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import GlobalStyles from '@mui/material/GlobalStyles';
import Container from '@mui/material/Container';


const footers = [
    {
      title: 'Tiny Paws Rescue',
      description: ['Find a dog', 'About us', 'Get Involved', 'Contact us'],
    },
    {
      title: 'Resources',
      description: ['Benefits of Dogs', 'Adoption laws', 'Free vet clinics', 'Dog Food banks'],
    },
    {
      title: 'Legal',
      description: ['Privacy policy', 'Terms of use'],
    },
    {
      title: 'Contact us',
      description: [
        'Phone: (941)-543-0908',
        'tinypaws@gmail.com',
      ],
    },
  ];

  function Copyright(props) {
    return (
      <Typography variant="body2" color="text.secondary" align="center" {...props}>
        {'Copyright © '}
        <Link color="inherit" href="/">
          Tiny Paws Rescue
        </Link>{' '}
        since 2011
        {'.'}
      </Typography>
    );
  }


  const Footer = () => {
    return (  
    <section  
    style = {{
        backgroundColor: 'white'
      }}
    > 
    <GlobalStyles styles={{ ul: { margin: 0, padding: 0, listStyle: 'none', } }} />
    <CssBaseline />
      <Container
      maxWidth="md"
      component="footer"
      sx={{
        borderTop: (theme) => `1px solid ${theme.palette.divider}`,
        mt: 8,
        py: [3, 6],
      }}
    >
      <Grid container spacing={4} justifyContent="space-evenly">
        {footers.map((footer) => (
          <Grid item xs={6} sm={3} key={footer.title}>
            <Typography variant="h6" color="text.primary" gutterBottom>
              {footer.title}
            </Typography>
            <ul>
              {footer.description.map((item) => (
                <li key={item}>
                  <Link href="#" variant="subtitle1" color="text.secondary">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </Grid>
        ))}
      </Grid>
      <Copyright sx={{ mt: 5 }} />
    </Container>
    </section>
    );
  }

  export default Footer;