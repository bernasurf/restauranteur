/* eslint-disable jsx-a11y/alt-text */
import React, { useState } from 'react';
import TextField, { Input } from '@material/react-text-field';
import MaterialIcon from '@material/react-material-icon';
import Slider from 'react-slick';

import logo from '../../assets/logo.svg';
import restaurantPlaceholder from '../../assets/restaurante-fake.png';
import { Card, RestaurantCard, Modal } from '../../components';

import { Wrapper, Container, Search, Logo, Map, Carousel, CarouselTitle } from './styles';

const Home = () => {
  const [inputValue, setInputValue] = useState('');
  const [modalOpened, setModalOpened] = useState(false);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScrow: 4,
    adaptiveHeight: true,
  };

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
              onChange={(event) => setInputValue(event.target.value)}
            />
          </TextField>
          <CarouselTitle>In your area</CarouselTitle>
          <Carousel {...settings}>
            <Card image={restaurantPlaceholder} title="restaurant name" />
            <Card image={restaurantPlaceholder} title="restaurant name2" />
            <Card image={restaurantPlaceholder} title="restaurant name3" />
            <Card image={restaurantPlaceholder} title="restaurant name4" />
            <Card image={restaurantPlaceholder} title="restaurant name5" />
            <Card image={restaurantPlaceholder} title="restaurant name6" />
            <Card image={restaurantPlaceholder} title="restaurant name7" />
            <Card image={restaurantPlaceholder} title="restaurant name8" />
          </Carousel>
          <button type="button" onClick={() => setModalOpened(true)}>
            Open/Test Modal
          </button>
        </Search>
        <RestaurantCard />
      </Container>
      <Map />
      <Modal open={modalOpened} onClose={() => setModalOpened(!modalOpened)} />
    </Wrapper>
  );
};

export default Home;
