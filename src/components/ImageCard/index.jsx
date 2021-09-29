import React from 'react';
import styled from 'styled-components';

const Card = styled.div`
  display: flex;
  justify-content: center;
  padding: 2px;
  width: 90px;
  height: 90px;
  border-radius: 6px;
  background-image: url(${(props) => props.image});
  background-size: cover;
`;

const Title = styled.span`
  font-family: ${(props) => props.theme.fonts.regular};
  color: #ffffff;
  font-size: 16px;
`;

const ImageCard = ({ image, title }) => (
  <Card image={image}>
    <Title>{title}</Title>
  </Card>
);

export default ImageCard;