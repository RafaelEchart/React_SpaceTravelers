import React from 'react';
import { useSelector } from 'react-redux';

const RocketsFilter = () => {
  const rocketStorage = useSelector((state) => state.rockets);

  const reservedRockets = rocketStorage.filter((rocket) => {
    if (rocket.reserved === true) {
      return rocket;
    }
    return null;
  });

  return (
    <>
    {reservedRockets.map((rocket) => (
        <li key={rocket.id}>
          {rocket.name}
        </li>
    ))}
    {!reservedRockets.length && <li>
          There is no reserved rockets!
        </li>
    }
    </>
  );
};

export default RocketsFilter;
