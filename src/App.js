import React from 'react';
// import {
//   Routes,
//   Route,
//   Navigate,
// } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';

function App() {
  return (
    <div className="App">
        <Header />
        {/* <div>
          <Routes>
            <Route path="/" element={<Navigate to="/rockets" />} />
            <Route path="/rockets" element={<Rockets />} />
            <Route path="/missions" element={<Missions />} />
            <Route path="/myProfile" element={<MyProfile />} />
          </Routes>
        </div> */}
    </div>
  );
}

export default App;
