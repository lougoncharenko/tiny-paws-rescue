import React from 'react';
import { Layout, AlphaCard, Grid } from '@shopify/polaris';
import DogCard from '../DogCard/DogCard';
//to do import dog data as products
import data from '../../data/dogs.json'



const DogContainer = () => {
  return (
    <Layout>
      <Layout.Section>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
            <AlphaCard>
            <div style={{ display: 'flex', flexWrap: 'wrap' }}>
              {data.map((dog, index) => (
                <div key={index} style={{ padding: '8px', width: '100%', maxWidth: '400px' }}>
                  <DogCard dog={dog} />
                </div>
              ))}
            </div>
            </AlphaCard>
        </div>
      </Layout.Section>
    </Layout>
  );
};

export default DogContainer;
