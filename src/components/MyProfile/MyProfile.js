import React from 'react';
import MissionFilter from './MissionFilter';
import RocketsFilter from './RocketsFilter';

const MyProfile = () => (
  <div>
    <section>
      <h2>Missions</h2>
      <ul><MissionFilter /></ul>
    </section>
    <section>
      <h2>Missions</h2>
      <ul><RocketsFilter /></ul>
    </section>
  </div>
);

export default MyProfile;
