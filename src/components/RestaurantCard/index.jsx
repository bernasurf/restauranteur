import React from 'react';
import ReactStars from 'react-rating-stars-component';

import { Restaurant, RestaurantInfo, Title, RestAddress, RestaurantPhoto } from './styles';
import restaurantPlaceholder from '../../assets/restaurante-fake.png';

const RestaurantCard = ({ restaurant, onClick }) => (
  <Restaurant onClick={onClick}>
    <RestaurantInfo>
      <Title>{restaurant.name}</Title>
      <ReactStars count={5} value={restaurant.rating} edit={false} isHalf activeColor="#e7711c" />
      <RestAddress>{restaurant.vicinity || restaurant.formatted_address}</RestAddress>
    </RestaurantInfo>
    <RestaurantPhoto
      src={restaurant.photos ? restaurant.photos[0].getUrl() : restaurantPlaceholder}
      alt={restaurant.name}
    />
  </Restaurant>
);

export default RestaurantCard;
