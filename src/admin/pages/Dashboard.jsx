import React from 'react';

const Dashboard = () => {
  return (
    <div className="admin-page">
      <div className="admin-page-header">
        <h1 className="admin-page-title">Dashboard</h1>
        <p className="admin-page-subtitle">Welcome to your admin dashboard</p>
      </div>
      
      <div className="admin-page-content">
        <div className="row">
          <div className="col-md-4">
            <div className="card admin-card">
              <div className="card-body">
                <h5 className="card-title">Total Users</h5>
                <h2 className="admin-stat-number">1,234</h2>
                <p className="card-text text-success">+12% from last month</p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card admin-card">
              <div className="card-body">
                <h5 className="card-title">Revenue</h5>
                <h2 className="admin-stat-number">$12,345</h2>
                <p className="card-text text-success">+8% from last month</p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card admin-card">
              <div className="card-body">
                <h5 className="card-title">Orders</h5>
                <h2 className="admin-stat-number">567</h2>
                <p className="card-text text-success">+15% from last month</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
