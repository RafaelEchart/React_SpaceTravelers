import { React } from 'react';
import { useSelector } from 'react-redux';
import MissionsInfo from './MissionsInfo';
import './Missions.css';

const MissionsTable = () => {
  const missions = useSelector((state) => state.missions);

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
        <tbody>
          {missions.map((mission) => (
            <MissionsInfo key={missions.indexOf(mission)} data={mission} />
          ))}
        </tbody>
    </table>
  );
};

export default MissionsTable;