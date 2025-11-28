import React from 'react';
import Sidebar from './Components/Sidebar';
import Topbar from './Components/Topbar';
import Dashboard from './Components/Dashboard';
import './App.css';

function App() {
  return (
    <div className="app">
      <Sidebar />
      <Topbar />
      <Dashboard />
    </div>
  );
}

export default App;
