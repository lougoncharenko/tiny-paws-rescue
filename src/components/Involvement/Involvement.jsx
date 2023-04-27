
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import cards from '../../data/volunteer.json'


// const cards = [1, 2, 3];

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

export default function VolunteerOpportunites() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AppBar position="relative" color="primary">
        <Toolbar>
        </Toolbar>
      </AppBar>
      <main>
        {/* Hero unit */}
        <Box
          sx={{
            bgcolor: 'background.paper',
            pt: 8,
            pb: 6,
          }}
        >
          <Container maxWidth="sm">
            <Typography
              component="h1"
              variant="h3"
              align="center"
              color="text.primary"
              gutterBottom
            >
              Volunteer Oppurtunities
            </Typography>
            <Typography
              component="h3"
              variant="h5"
              align="center"
              color="text.primary"
              gutterBottom
            >
              ANIMALS NEED OUR HELP – AND WE NEED YOURS
            </Typography>
            <Typography variant="h5" align="center" color="text.secondary" paragraph>
            Our animals rely on our staff and generous people like you to help love and care for them.
            Discover the joy and fulfillment of saving a homeless dog who wants, waits and wishes 
            for a home. If you have a heart for helping animals, you have a place here at Tiny Paws Rescue.
            </Typography>
            <Stack
              sx={{ pt: 4 }}
              direction="row"
              spacing={2}
              justifyContent="center"
            >
              <Button>Volunteer</Button>
              <Button>Foster</Button>
            </Stack>
          </Container>
        </Box>
        <Container sx={{ py: 8 }} maxWidth="lg">
          {/* End hero unit */}
          <Grid container spacing={4}>
            {cards.map((card) => (
              <Grid item key={card} xs={12} sm={6} md={4}>
                <Card
                  sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
                >
                  <CardMedia
                    component="img"
                    sx={{
                      // 16:9
                      pt: '2%',
                    }}
                    image={card.image}
                    alt="random"
                  />
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography gutterBottom variant="h5" component="h2">
                     {card.heading}
                    </Typography>
                    <Typography>
                      {card.description}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </main>
    </ThemeProvider>
  );
}