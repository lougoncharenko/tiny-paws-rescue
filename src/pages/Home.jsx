import React from 'react';
import AboutCard from '../components/AboutSection/About';
import BenefitSection from '../components/BenefitSection/BenefitSection';
import Banner from '../components/Banner/Banner';
import NewDogSection from '../components/NewDogSection/Section';

const Home = () => {
  return (
    <div>
      <Banner />
      <BenefitSection />
      <NewDogSection />
    </div>
  );
}

export default Home;
