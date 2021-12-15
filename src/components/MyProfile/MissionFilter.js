import React from 'react';
import { useSelector } from 'react-redux';

const MissionsFilter = () => {
  const missionsStorage = useSelector((state) => state.missions);

  const joinedMissions = missionsStorage.filter((mission) => {
    if (mission.status === true) {
      return mission;
    }
    return null;
  });

  return (
    <>
      {joinedMissions.map((mission) => (
        <li key={mission.mission_id}>
          {mission.mission_name}
        </li>
      ))}

    {!joinedMissions.length && <li>
          There is no joined missions!
        </li>
    }
    </>
  );
};

export default MissionsFilter;