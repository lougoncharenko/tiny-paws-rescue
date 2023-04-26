import React from 'react';
import { AlphaCard, Button, VerticalStack, Text, TextField } from '@shopify/polaris';
import { Link } from 'react-router-dom';

const DogCard = ({dog}) => {
  return (
    <AlphaCard
    background="bg-subdued"
    padding={{xs: '4', sm: '5', md: '6', lg: '8', xl: '10'}}>
      <img
        alt={dog.name}
        width="100%"
        height="100%"
        style={{
          objectFit: 'cover',
          objectPosition: 'center',
        }}
        src={dog.image}
      />
    <Text as="h2" variant="headingMd" alignment='center'>
    {dog.name}
    </Text>
    <Text as="h2" variant="bodyLg" fontWeight='bold' alignment='center'>
    {dog.breed}
    </Text>
    <VerticalStack gap="5">
      <Button
      plain>
        View Full Details
      </Button>
    </VerticalStack>

    </AlphaCard>
  );
};

export default DogCard;
