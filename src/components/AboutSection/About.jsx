import React from 'react'
import {MediaCard} from '@shopify/polaris';

const AboutCard = () => {
  return (
    <section
    style ={{
      margin: '50px'
    }}>
       <MediaCard
      title="Why adopt from Tiny Paws?"
      primaryAction={{
        content: 'Find out more',
        onAction: () => {
           window.location = '/about';
        },
      }}
      description="Adopting a dog from us is not only a compassionate decision but also a 
      responsible one. Our organization takes great care to ensure that each dog we place 
      in a new home is healthy, well-adjusted, and ready to be a loving companion. By 
      adopting from us, you'll not only be giving a deserving animal a second chance at 
      a happy life, but you'll also be supporting our efforts to rescue and care for more 
      dogs in need. Plus, the joy and unconditional love that a dog can bring into your 
      life is priceless. So why not make a difference in both your life and a dog's life 
      by adopting from us today?"
    >
      <img
        alt=""
        width="100%"
        height="100%"
        style={{
          objectFit: 'cover',
          objectPosition: 'center',
        }}
        src="https://media-be.chewy.com/wp-content/uploads/2022/09/27110948/cute-dogs-hero-1024x615.jpg"
      />
    </MediaCard>

    </section>
   
  );
  
}

export default AboutCard