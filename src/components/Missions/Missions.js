import React from 'react';
import MissionsInfo from './MissionsInfo';
import './Missions.css';

const MissionsLists = () => (
  <table className="list-container">
    <tbody>
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
      <MissionsInfo />
    </tbody>
  </table>
);

export default MissionsLists;