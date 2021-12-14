import React from 'react';
import { useDispatch } from 'react-redux';
import { joinMissions, leaveMissions } from '../../redux/Missions/missions';

const MissionsInfo = (props) => {
  const { data } = props;
  const missionName = data.mission_name;
  const id = data.mission_id;
  const { description, status } = data;
  const dispatch = useDispatch();

  const joinMissionsButton = () => {
    dispatch(joinMissions(id));
  };

  const leaveMissionsButton = () => {
    dispatch(leaveMissions(id));
  };

  const statusChange = () => {
    if (status === true) {
      leaveMissionsButton();
    } else {
      joinMissionsButton();
    }
  };

  return (
    <tr>
      <td>
        <b id="missionName">{missionName}</b>
      </td>
      <td id="missionDescription">
        {description}
      </td>
      <td className="button-container">
        <button
          type="button"
          className={status
            ? 'button-status button-status-active'
            : 'button-status'}
        >
          <span>
            {status
              ? 'Active Member'
              : 'NOT A MEMBER'}
          </span>
        </button>
      </td>
      <td className="button-container">
        <button
          type="button"
          className={status
            ? 'button-join button-join-active'
            : 'button-join'}
          onClick={statusChange}
        >
          <span>
            {status
              ? 'Cancel Mission'
              : 'Join Mission'}
          </span>
        </button>
      </td>
    </tr>
  );
};

export default MissionsInfo;