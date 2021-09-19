import React, { useState } from 'react';
import TextField, { Input } from '@material/react-text-field';

import logo from '../../assets/logo.svg';

import { Container, Search } from './styles';

const Home = () => {
  const [inputValue, setInputValue] = useState('');

  return (
    <Container>
      <Search>
        <img src={logo} alt="restaurant logo" />
        <TextField outlined label="Search">
          <Input
            type="text"
            value={inputValue}
            onChange={(event) => setInputValue(event.target.value)}
          />
        </TextField>
      </Search>
    </Container>
  );
};

export default Home;
