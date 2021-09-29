import React from 'react';

import { Restaurant, RestaurantInfo, Title, RestAddress } from './styles';

const RestaurantCard = () => (
  <Restaurant>
    <RestaurantInfo>
      <Title>Restaurant Name</Title>
      <p>Rating</p>
      <RestAddress>1/44 Cavil Avenue</RestAddress>
    </RestaurantInfo>
  </Restaurant>
);

export default RestaurantCard;
