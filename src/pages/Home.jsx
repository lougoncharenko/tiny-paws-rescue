import React from 'react';
import AboutCard from '../components/AboutSection/About';
import VolunteerCard from '../components/VolunteerCard/VolunteerCard';
import Services from '../components/Services/Services';

const Home = () => {
  return (
    <div>
      <AboutCard/>
      <Services/>
      <VolunteerCard />
    </div>
  );
}

export default Home;
