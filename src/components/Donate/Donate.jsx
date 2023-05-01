import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import GlobalStyles from '@mui/material/GlobalStyles';
import Container from '@mui/material/Container';
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
          marginTop: '50px',
          backgroundColor: '#8B4513'
        },
      },
    },
  },
});

const tiers = [
  {
    title: 'Basic',
    price: '25',
    description: [
      'This monthly donation goes on to help feed a dog for a month ',
    ],
    buttonText: 'Click to start',
    buttonVariant: 'outlined',
  },
  {
    title: 'Awesome',
    subheader: 'Most popular',
    price: '50',
    description: [
      'This donation package helps give a dog both food and the necessary medical expenses needed for a singular dog',
    ],
    buttonText: 'Click to start',
    buttonVariant: 'contained',
  },
  {
    title: 'Elite',
    price: '100',
    description: [
      'This supreme package gives a dog full medical expenses and food for a month.',
    ],
    buttonText: 'Click to start',
    buttonVariant: 'outlined',
  },
];


const  Donate = ()  => {
  return (
    <ThemeProvider theme={theme}>
    <React.Fragment>
      <GlobalStyles styles={{ ul: { margin: 0, padding: 0, listStyle: 'none' } }} />
      <CssBaseline />
      <AppBar
        position="static"
        color="default"
        elevation={0}
        sx={{ borderBottom: (theme) => `1px solid ${theme.palette.divider}` }}
      >
      </AppBar>
      {/* Hero unit */}
      <Container 
      disableGutters 
      maxWidth="sm" 
      component="main" 
      sx={{ pt: 8, pb: 6 }}>
        <Typography
          component="h1"
          variant="h2"
          align="center"
          color="text.primary"
          gutterBottom
        >
          Monthly Giving Options
        </Typography>
        <Typography variant="h5" align="center" color="text.secondary" component="p">
          Our company runs primary on donations and volunteer work. We rely heavily on the generosity of other 
          to provide for each dog the highest quality of care that they deserve.
        </Typography>
      </Container>
      {/* End hero unit */}
      <Container maxWidth="md" component="main">
        <Grid container spacing={5} alignItems="flex-end">
          {tiers.map((tier) => (
            // Enterprise card is full width at sm breakpoint
            <Grid
              item
              key={tier.title}
              xs={12}
              sm={tier.title === 'Enterprise' ? 12 : 6}
              md={4}
            >
              <Card>
                <CardHeader
                  title={tier.title}
                  subheader={tier.subheader}
                  titleTypographyProps={{ align: 'center' }}
                  subheaderTypographyProps={{
                    align: 'center',
                  }}
                  sx={{
                    backgroundColor: (theme) =>
                      theme.palette.mode === 'light'
                        ? theme.palette.grey[200]
                        : theme.palette.grey[700],
                  }}
                />
                <CardContent>
                  <Box
                    sx={{
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'baseline',
                      mb: 2,
                    }}
                  >
                    <Typography component="h2" variant="h3" color="text.primary">
                      ${tier.price}
                    </Typography>
                    <Typography variant="h6" color="text.secondary">
                      /mo
                    </Typography>
                  </Box>
                  <ul>
                    {tier.description.map((line) => (
                      <Typography
                        component="li"
                        variant="subtitle1"
                        align="center"
                        key={line}
                      >
                        {line}
                      </Typography>
                    ))}
                  </ul>
                </CardContent>
                <CardActions>
                  <Button fullWidth variant={tier.buttonVariant}>
                    {tier.buttonText}
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </React.Fragment>
    <Toolbar></Toolbar>
    </ThemeProvider>
  );
}

export default Donate;