/* eslint-disable react/jsx-indent */
/* eslint-disable react/jsx-indent-props */
/* eslint-disable camelcase */
/* eslint-disable jsx-a11y/alt-text */
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import TextField, { Input } from '@material/react-text-field';
import MaterialIcon from '@material/react-material-icon';
// import Slider from 'react-slick';

import logo from '../../assets/logo.svg';
import restaurantPlaceholder from '../../assets/restaurante-fake.png';
import { Card, RestaurantCard, Modal, Map, Loader, Skeleton } from '../../components';

import {
  Wrapper,
  Container,
  Search,
  Logo,
  Carousel,
  CarouselTitle,
  ModalTitle,
  ModalContent,
} from './styles';

const Home = () => {
  const [inputValue, setInputValue] = useState('');
  const [query, setQuery] = useState(null);
  const [placeId, setPlaceId] = useState(null);
  const [modalOpened, setModalOpened] = useState(false);
  const { restaurants, restaurantSelected } = useSelector((state) => state.restaurants);

  const settings = {
    dots: false,
    infinite: true,
    autoplay: true,
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

  function handleOpenModal(placeId) {
    setPlaceId(placeId);
    setModalOpened(true);
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
          {restaurants.length > 0 ? (
            <>
              <CarouselTitle>In your area</CarouselTitle>
              <Carousel {...settings}>
                {restaurants.map((restaurant) => (
                  <Card
                    key={restaurant.place_id}
                    image={
                      restaurant.photos ? restaurant.photos[0].getUrl() : restaurantPlaceholder
                    }
                    title={restaurant.name}
                  />
                ))}
              </Carousel>
            </>
          ) : (
            <Loader />
          )}
        </Search>
        {restaurants.map((restaurant) => (
          <RestaurantCard
            onClick={() => handleOpenModal(restaurant.place_id)}
            key={restaurant.place_id}
            restaurant={restaurant}
          />
        ))}
      </Container>
      <Map query={query} placeId={placeId} />
      <Modal open={modalOpened} onClose={() => setModalOpened(!modalOpened)}>
        {restaurantSelected ? (
          <>
            <ModalTitle>{restaurantSelected?.name}</ModalTitle>
            <ModalContent>Phone: {restaurantSelected?.formatted_phone_number}</ModalContent>
            <ModalContent>Address: {restaurantSelected?.formatted_address}</ModalContent>
            <ModalContent>
              Opening Hours:{' '}
              {restaurantSelected?.opening_hours?.open_now ? 'Open Now :o)' : 'Closed Now :o('}
            </ModalContent>
          </>
        ) : (
          <>
            <Skeleton width="10px" height="10px" />
            <Skeleton width="10px" height="10px" />
            <Skeleton width="10px" height="10px" />
            <Skeleton width="10px" height="10px" />
          </>
        )}
      </Modal>
    </Wrapper>
  );
};

export default Home;
