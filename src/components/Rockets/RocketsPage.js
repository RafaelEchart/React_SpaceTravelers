import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import RocketCard from './RocketCard';

import { loadRockets } from '../../redux/Rockets/rockets';

const Rockets = () => {
  const rockets = useSelector((state) => state.rockets);
  const dispatch = useDispatch();

  useEffect(() => {
    if (document.readyState !== 'complete') {
      dispatch(loadRockets());
    }
  }, []);

  return (

    <React.Fragment>

    {rockets.map((rocket) => (
      <RocketCard
      id={rocket.id}
      key={rocket.id}
      description={rocket.description}
      image={rocket.image[0]}
      name={rocket.name} />
    ))}

    </React.Fragment>

  );
};

export default Rockets;
