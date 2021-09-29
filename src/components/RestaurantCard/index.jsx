import React from 'react';
import ReactStars from 'react-rating-stars-component';

import { Restaurant, RestaurantInfo, Title, RestAddress, RestaurantPhoto } from './styles';
import restaurantPlaceholder from '../../assets/restaurante-fake.png';

const RestaurantCard = () => (
  <Restaurant>
    <RestaurantInfo>
      <Title>Restaurant Name</Title>
      <ReactStars count={5} value={4} edit={false} isHalf activeColor="#e7711c" />
      <RestAddress>1/44 Cavil Avenue</RestAddress>
    </RestaurantInfo>
    <RestaurantPhoto src={restaurantPlaceholder} alt="Restaurant's" />
  </Restaurant>
);

export default RestaurantCard;
