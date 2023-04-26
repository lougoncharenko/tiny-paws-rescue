import {CalloutCard} from '@shopify/polaris';
import React from 'react';

function VolunteerCard() {
  return (
    <section
    style ={{
        margin: '50px'
      }}>
    <CalloutCard
      title="Please get involved anyway that you can"
      illustration="https://thumbs.dreamstime.com/b/man-walking-dog-vector-illustration-flat-style-103711767.jpg"
      primaryAction={{
        content: 'Get Involved',
        url: '/involvement',
      }}
    >
      <p>Get involved through donations, volunteering or sharing our organization on social media</p>
    </CalloutCard>
    </section>
  );
}

export default VolunteerCard;