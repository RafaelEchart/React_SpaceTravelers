import React from 'react';
import Button from 'react-bootstrap/Button';
import './rocketCard.css';

const RocketCard = (props) => {
  const {
    id, description, image, name,
  } = props;

  return (

      <div className='rocketCardContainer'key={id} >
      <img src={image} width={220} />
      <div className='rocketCardTextContainer'>

      <h2>{name}</h2>
      <span>{description}</span>
      <Button variant="primary">Reserve Rocket</Button>

      </div>
      </div>

  );
};

export default RocketCard;
