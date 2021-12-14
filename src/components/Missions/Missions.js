import { React, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { loadMissionsData } from '../../redux/Missions/missions';
import MissionsInfo from './MissionsInfo';
import './Missions.css';

const Missions = () => {
  const missions = useSelector((state) => state.missions);
  const dispatch = useDispatch();

  useEffect(() => {
    if (missions.length === 0) {
      dispatch(loadMissionsData());
    }
  }, []);

  return (
    <table className="list-container">
      <thead>
        <tr>
          <th>
            Mission
          </th>
          <th>
            Description
          </th>
          <th>
            Status
          </th>
          <th aria-label="none" />
        </tr>
      </thead>
      {missions.map((mission) => (
        <MissionsInfo key={missions.id} data={mission} />
      ))}
    </table>
  );
};

export default Missions;