import React from 'react';
import Button from 'react-bootstrap/Button';
import Badge from 'react-bootstrap/Badge';
import { useDispatch } from 'react-redux';
import { reservationRocket } from '../../redux/Rockets/rockets';

import './rocketCard.css';

const RocketCard = (props) => {
  const {
    id, description, image, name, reserved,
  } = props;

  const dispatch = useDispatch();

  const handleReservations = (id) => {
    dispatch(reservationRocket(id));
  };
  return (

      <div className='rocketCardContainer'key={id} >
      <img src={image} width={220} />
      <div className='rocketCardTextContainer'>

      <h2>{name}</h2>
      <span>{reserved ? <Badge bg="primary" className='reservedBadge'>Reserved</Badge> : ''}{description}</span>
      {reserved ? <Button onClick={() => handleReservations(id)} variant="outline-secondary">Cancel Reservation</Button> : <Button onClick={() => handleReservations(id)} variant="primary">Reserve Rocket</Button> }

      </div>
      </div>

  );
};

export default RocketCard;
