import React from 'react';
import {
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Header from './components/Header/Header';
import MyProfile from './components/MyProfile/MyProfile';
import Missions from './components/Missions/Missions';
import Rockets from './components/Rockets/RocketsPage';

function App() {
  return (
    <div className="App">
        <Header />
        <div className='contentContainer'>
          <Routes>
            <Route path="/" element={<Navigate to="/rockets" />} />
            <Route path="/rockets" element={<Rockets />} />
            <Route path="/missions" element={<Missions />} />
            <Route path="/myProfile" element={<MyProfile />} />
          </Routes>
        </div>
    </div>
  );
}

export default App;
