/* eslint-disable jsx-a11y/alt-text */
import React, { useState } from 'react';
import TextField, { Input } from '@material/react-text-field';
import MaterialIcon from '@material/react-material-icon';
import Slider from 'react-slick';

import logo from '../../assets/logo.svg';
import restaurantPlaceholder from '../../assets/restaurante-fake.png';

import { Wrapper, Container, Search, Logo, Map, CarouselTitle } from './styles';

const Home = () => {
  const [inputValue, setInputValue] = useState('');

  const settings = {
    dots: true,
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
          <Slider {...settings}>
            <div>
              <img src={restaurantPlaceholder} />
            </div>
            <div>
              <img src={restaurantPlaceholder} />
            </div>
            <div>
              <img src={restaurantPlaceholder} />
            </div>
            <div>
              <img src={restaurantPlaceholder} />
            </div>
            <div>
              <img src={restaurantPlaceholder} />
            </div>
          </Slider>
        </Search>
      </Container>
      <Map />
    </Wrapper>
  );
};

export default Home;
