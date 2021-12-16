import React from 'react';

const MissionsFilter = (props) => {
  const { missionsStorage } = props;

  const joinedMissions = missionsStorage.filter((mission) => {
    if (mission.status === true) {
      return missionsStorage;
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