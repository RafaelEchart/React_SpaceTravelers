import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import RocketCard from './RocketCard';

import { loadRockets } from '../../redux/Rockets/rockets';

const Rockets = () => {
  const rockets = useSelector((state) => state.rockets);
  const dispatch = useDispatch();

  useEffect(() => {
    if (rockets.length === 0) {
      dispatch(loadRockets());
    }
  }, []);

  return (

    <React.Fragment>

    {rockets && rockets.map((rocket) => (
      <RocketCard
      id={rocket.id}
      key={rocket.id}
      description={rocket.description}
      image={rocket.image[0]}
      name={rocket.name}
      reserved={rocket.reserved} />
    ))}

    {!rockets && <p className='mission_error_message'>There was an error loading the rockets, please try to reload the page</p>}

    </React.Fragment>

  );
};

export default Rockets;
