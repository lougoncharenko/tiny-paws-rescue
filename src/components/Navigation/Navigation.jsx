import {Frame, Navigation} from '@shopify/polaris';
import {HomeMinor, OrdersMinor, ProductsMinor} from '@shopify/polaris-icons';
import React from 'react';

const Navbar  = ()  => {
  return (
    <Frame>
      <Navigation location="/">
        <Navigation.Section
          items={[
            {
              url: '/home',
              label: 'Home',
              icon: HomeMinor,
            },
            {
              url: '/about',
              label: 'About',
              icon: OrdersMinor,
              badge: '15',
            },
            {
              url: '/dogs',
              label: 'Dogs',
              icon: ProductsMinor,
            },
          ]}
        />
      </Navigation>
    </Frame>
  );
}

export default Navbar;