import React from 'react';
import { useSelector } from 'react-redux';

const RocketsFilter = () => {
  const rocketStorage = useSelector((state) => state.rockets);
  let reservedRockets;
  if (rocketStorage.length) {
    reservedRockets = rocketStorage.filter((rocket) => {
      if (rocket.reserved === true) {
        return rocket;
      }
      return null;
    });
  } else {
    reservedRockets = false;
  }

  return (
    <>

    {reservedRockets && <React.Fragment>
      {reservedRockets.length ? reservedRockets.map((rocket) => (
        <li key={rocket.id}>
          {rocket.name}
        </li>
      ))
        : <li>
          There is no reserved rockets!
        </li> }
    </React.Fragment> }

    {!reservedRockets && <li className='mission_error_message'>
          Network Error: Try again!
        </li>
    }
    </>
  );
};

export default RocketsFilter;
