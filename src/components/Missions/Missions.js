import { React, useEffect } from 'react';
import { bindActionCreators } from 'redux';
import { useSelector, useDispatch } from 'react-redux';
import { loadMissionsData } from '../../redux/Missions/missions';

const Missions = () => {
  const missions = useSelector((state) => state.missions);
  const dispatch = useDispatch();
  const loadMissionsAction = bindActionCreators(loadMissionsData, dispatch);

  useEffect(() => {
    loadMissionsAction();
    return null;
  }, []);

  return (
    <div>
      {missions.map((mission) => (
        <><p>{mission.mission_id}</p><p>{mission.mission_name}</p><p>{mission.description}</p></>
      ))}
    </div>
  );
};

export default Missions;
