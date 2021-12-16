import { React } from 'react';
import MissionsInfo from './MissionsInfo';
import './Missions.css';

const MissionsTable = (props) => {
  const { missions } = props;

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