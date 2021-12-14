/* eslint-disable react/jsx-key */
import { React, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { loadMissionsData } from '../../redux/Missions/missions';

const MissionsInfo = () => {
  const missions = useSelector((state) => state.missions);
  const dispatch = useDispatch();

  useEffect(() => {
    if (missions.length === 0) {
      dispatch(loadMissionsData());
    }
  }, []);

  return (
    <>
    {missions.map((mission) => (
      <tr>
        <td>
          <b>{mission.mission_name}</b>
        </td>
        <td>
          {mission.description}
        </td>
        <td className="button-container">
          <button type="button" className="button-status">
            <span>
              NOT A MEMBER
            </span>
          </button>
        </td>
        <td className="button-container">
          <button type="button" className="button-join">
            <span>
              Join Mission
            </span>
          </button>
        </td>
      </tr>
    ))}
    </>
  );
};

export default MissionsInfo;
