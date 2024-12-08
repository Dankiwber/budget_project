import { useState, useEffect } from 'react';
import budgetLogo from '../assets/budget_logo.svg';
import user_icon from '../assets/user_defult.svg';
import '../style/sidebar.css';

function Sidebar({ user, loading }) {
  return (
    <div className="sidebar">
      <div className="header">
        <img id="header_logo" src={budgetLogo} alt="Budget Logo" />
        <h2>Flow Tracker</h2>
      </div>
      <div className="user_pic">
        <img id="user" src={user_icon} alt="User Icon" />
        {loading ? (
          <h3>Loading...</h3>
        ) : (
          <>
            <h3>Welcome back, {user}!</h3>
            <div className="dashboard_content">
              <button>Dashboard</button>
              <button>Profile</button>
              <button>Setting</button>
              <button>Log out</button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default Sidebar;
