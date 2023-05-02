import React, { useState } from 'react';
import './styles/App.scss';
import Navbar from './components/Navbar';
import { Route, Routes } from "react-router-dom";
import Home from './components/Home';
import About from './components/About';
function App() {
  const [users, setUsers] = useState();

  const getUsers = () => {
    fetch('/api/users').then(res => res.json()).then(setUsers);
  }

  return (
    <div className="App">
      {/* include in main website push <Navbar /> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
      </Routes>
    </div>
  );
}

export default App;
