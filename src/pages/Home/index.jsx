/* eslint-disable jsx-a11y/alt-text */
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import TextField, { Input } from '@material/react-text-field';
import MaterialIcon from '@material/react-material-icon';
// import Slider from 'react-slick';

import logo from '../../assets/logo.svg';
import restaurantPlaceholder from '../../assets/restaurante-fake.png';
import { Card, RestaurantCard, Modal, Map } from '../../components';

import { Wrapper, Container, Search, Logo, Carousel, CarouselTitle } from './styles';

const Home = () => {
  const [inputValue, setInputValue] = useState('');
  const [query, setQuery] = useState(null);
  const [modalOpened, setModalOpened] = useState(false);
  const { restaurants } = useSelector((state) => state.restaurants);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScrow: 4,
    adaptiveHeight: true,
  };

  function handleKeyPress(event) {
    if (event.key === 'Enter') {
      setQuery(inputValue);
    }
  }

  return (
    <Wrapper>
      <Container>
        <Search>
          <Logo src={logo} alt="restaurant logo" />
          <TextField
            outlined
            label="Search Reastaurants"
            trailingIcon={<MaterialIcon role="button" icon="search" />}>
            <Input
              type="text"
              value={inputValue}
              onKeyPress={handleKeyPress}
              onChange={(event) => setInputValue(event.target.value)}
            />
          </TextField>
          <CarouselTitle>In your area</CarouselTitle>
          <Carousel {...settings}>
            {restaurants.map((restaurant) => (
              <Card
                key={restaurant.place_id}
                image={restaurant.photos ? restaurant.photos[0].getUrl() : restaurantPlaceholder}
                title={restaurant.name}
              />
            ))}
          </Carousel>
          <button type="button" onClick={() => setModalOpened(true)}>
            Open/Test Modal
          </button>
        </Search>
        {restaurants.map((restaurant) => (
          <RestaurantCard key={restaurant.place_id} restaurant={restaurant} />
        ))}
      </Container>
      <Map query={query} />
      <Modal open={modalOpened} onClose={() => setModalOpened(!modalOpened)} />
    </Wrapper>
  );
};

export default Home;
