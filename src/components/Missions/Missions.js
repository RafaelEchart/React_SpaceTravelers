import { React, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { loadMissionsData } from '../../redux/Missions/missions';
import MissionsTable from './MissionsTable';
import './Missions.css';

const Missions = () => {
  const missions = useSelector((state) => state.missions);
  const dispatch = useDispatch();

  useEffect(() => {
    if (missions.length === 0) {
      dispatch(loadMissionsData());
    }
  }, []);

  const isError = () => {
    if (missions.error === true) {
      return (<p className='mission_error_message'>There was an error loading your missions, please try to reload the page</p>);
    }
    return (<MissionsTable missions={missions} />);
  };

  return (
    <>
      {isError()}
    </>
  );
};

export default Missions;