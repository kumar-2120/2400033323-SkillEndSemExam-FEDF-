import React from 'react';
import Sidebar from './components/Sidebar';
import Topbar from './components/Topbar';
import Dashboard from './components/Dashboard';
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
