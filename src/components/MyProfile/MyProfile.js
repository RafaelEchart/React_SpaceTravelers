import React from 'react';
import MissionProfile from './MissionProfile';
import RocketsFilter from './RocketsFilter';
import './MyProfile.css';

const MyProfile = () => (
  <div className='filter_container'>
    <section>
      <h2>My Missions</h2>
      <ul><MissionProfile /></ul>
    </section>
    <section>
      <h2>My Rockets</h2>
      <ul><RocketsFilter /></ul>
    </section>
  </div>
);

export default MyProfile;
