import React from 'react';

const Sidebar = () => (
  <div className="sidebar">
    <h2>Dashboard</h2>
    <nav>
      <ul style={{ listStyle: 'none', padding: 0 }}>
        <li style={{ padding: '10px 0', borderBottom: '1px solid #34495e' }}>📚 Courses</li>
        <li style={{ padding: '10px 0', borderBottom: '1px solid #34495e' }}>📊 Marks</li>
        <li style={{ padding: '10px 0', borderBottom: '1px solid #34495e' }}>🔔 Notifications</li>
      </ul>
    </nav>
  </div>
);

export default Sidebar;
