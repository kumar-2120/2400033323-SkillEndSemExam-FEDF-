import React from 'react';
import Card from './card';

const Dashboard = () => (
  <div className="main">
    <Card title="Quick Stats">Courses: 5<br />Marks: 85%</Card>
    <Card title="Notifications">Assignment due tomorrow</Card>
    <Card title="Recent Activities">Logged in 2 hours ago</Card>
  </div>
);

export default Dashboard;
