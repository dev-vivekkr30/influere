import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Header.css';

const Header = ({ 
  userName = "Sonam",
  userAvatar = null
}) => {
  const [showUserDropdown, setShowUserDropdown] = useState(false);
  const navigate = useNavigate();

  const toggleUserDropdown = () => {
    setShowUserDropdown(!showUserDropdown);
  };

  const handleWalletClick = () => {
    navigate('/dashboard/wallet');
  };

  const handleEditProfileClick = () => {
    navigate('/dashboard/settings?tab=profile');
    setShowUserDropdown(false);
  };

  const handleTransactionHistoryClick = () => {
    navigate('/dashboard/my-profile/transaction-history');
    setShowUserDropdown(false);
  };

  const handleSettingsClick = () => {
    navigate('/dashboard/settings');
    setShowUserDropdown(false);
  };

  return (
    <header className="admin-header">
      {/* Greeting Section */}
      <div className="admin-header-greeting">
        <p className="admin-header-greeting-text" style={{color:'#000'}}>Hi, {userName}</p>
      </div>

      {/* Right Section - Icons and User */}
      <div className="admin-header-right">
        {/* Wallet Icon */}
        <button 
          className="admin-header-icon-btn" 
          aria-label="Wallet"
          onClick={handleWalletClick}
        >
          <i className="bi bi-wallet2"></i>
        </button>

        {/* Notifications Bell */}
        <button className="admin-header-icon-btn" aria-label="Notifications">
          <i className="bi bi-bell"></i>
        </button>

        {/* User Profile with Dropdown */}
        <div className="admin-header-user">
          <button 
            className="admin-header-user-btn"
            onClick={toggleUserDropdown}
            aria-label="User menu"
          >
            <div className="admin-header-user-avatar">
              {userAvatar ? (
                <img 
                  src={userAvatar} 
                  alt={userName}
                  className="admin-header-user-img"
                />
              ) : (
                <i className="bi bi-person-circle"></i>
              )}
            </div>
            <i className="bi bi-chevron-down admin-header-dropdown-arrow"></i>
          </button>

          {/* User Dropdown */}
          {showUserDropdown && (
            <div className="admin-header-user-dropdown">
              <div 
                className="admin-header-dropdown-item"
                onClick={handleEditProfileClick}
                style={{ cursor: 'pointer' }}
              >
                <i className="bi bi-person"></i>
                <span>Edit Profile</span>
              </div>
              <div 
                className="admin-header-dropdown-item"
                onClick={handleTransactionHistoryClick}
                style={{ cursor: 'pointer' }}
              >
                <i className="bi bi-clock-history"></i>
                <span>Transaction History</span>
              </div>
              <div 
                className="admin-header-dropdown-item"
                onClick={handleSettingsClick}
                style={{ cursor: 'pointer' }}
              >
                <i className="bi bi-gear"></i>
                <span>Settings</span>
              </div>
              <div className="admin-header-dropdown-item">
                <i className="bi bi-box-arrow-right"></i>
                <span>Logout</span>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
