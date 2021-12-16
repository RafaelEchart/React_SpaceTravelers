import React from 'react';
import { useSelector } from 'react-redux';
import MissionFilter from './MissionFilter';

const MissionsProfile = () => {
  const missionsStorage = useSelector((state) => state.missions);

  // eslint-disable-next-line consistent-return
  const isError = () => {
    if (missionsStorage.error === true) {
      return (<li className="mission_error_message">Network Error: Try again!</li>);
    }
    return (<MissionFilter missionsStorage={missionsStorage} />);
  };

  return (
    <>
      {isError()}
    </>
  );
};

export default MissionsProfile;