import React from 'react';
import Card from './card';
import studentAvatar from '../assets/student-avatar.svg';

const Dashboard = () => (
  <div className="main">
    <div className="profile-section">
      <img src={studentAvatar} alt="Student Avatar" className="avatar" />
      <h2>Welcome, Student!</h2>
    </div>
    <Card title="Quick Stats">Courses: 5<br />Marks: 85%</Card>
    <Card title="Notifications">Assignment due tomorrow</Card>
    <Card title="Recent Activities">Logged in 2 hours ago</Card>
  </div>
);

export default Dashboard;
