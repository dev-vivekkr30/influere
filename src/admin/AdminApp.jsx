import React from 'react';
import { Routes, Route } from 'react-router-dom';
import AdminLayout from './layouts/AdminLayout';
import WelcomeScreen from './pages/WelcomeScreen';
import Dashboard from './pages/Dashboard';
import ProfileServices from './pages/ProfileServices';
import './design-system/variables.css';
import './design-system/base.css';
import './styles/pages.css';

// Default navigation configuration
const defaultNavigationItems = [
  {
    id: 'dashboard',
    label: 'Dashboard',
    icon: 'grid',
    path: '/admin/dashboard',
    exact: true,
  },
  {
    id: 'profile-services',
    label: 'Profile Services',
    icon: 'person',
    path: '/admin/dashboard/profile-services',
    children: [
      {
        id: 'fake-profile',
        label: 'Fake Profile',
        path: '/admin/dashboard/profile-services/fake-profile',
      },
      {
        id: 'profile-buy-sell',
        label: 'Profile Buy/Sell',
        path: '/admin/dashboard/profile-services/buy-sell',
      },
      {
        id: 'discount-offers',
        label: 'Discount & Offers',
        path: '/admin/dashboard/profile-services/discount-offers',
      },
    ],
  },
  {
    id: 'professional-consultancy',
    label: 'Professional Consultancy',
    icon: 'file-earmark-text',
    path: '/admin/dashboard/consultancy',
  },
  {
    id: 'collaboration',
    label: 'Collaboration',
    icon: 'handshake',
    path: '/admin/dashboard/collaboration',
  },
];

const AdminApp = ({ 
  navigationItems = defaultNavigationItems,
  logo = "/src/assets/logo.svg",
  companyName = "INFLUERE",
  tagline = "Collaborate With Professionals",
  userName = "Sonam",
  userAvatar = null
}) => {
  return (
    <div className="admin-app">
      <Routes>
        {/* Welcome Screen Route */}
        <Route path="/" element={
          <AdminLayout 
            navigationItems={navigationItems}
            logo={logo}
            companyName={companyName}
            tagline={tagline}
            userName={userName}
            userAvatar={userAvatar}
          />
        }>
          <Route index element={<WelcomeScreen userName={userName} />} />
        </Route>
        
        {/* Admin Layout Routes */}
        <Route path="/dashboard" element={
          <AdminLayout 
            navigationItems={navigationItems}
            logo={logo}
            companyName={companyName}
            tagline={tagline}
            userName={userName}
            userAvatar={userAvatar}
          />
        }>
          <Route index element={<Dashboard />} />
          <Route path="profile-services" element={<ProfileServices />} />
          <Route path="profile-services/fake-profile" element={<ProfileServices />} />
          <Route path="profile-services/buy-sell" element={<ProfileServices />} />
          <Route path="profile-services/discount-offers" element={<ProfileServices />} />
          <Route path="consultancy" element={<ProfileServices />} />
          <Route path="collaboration" element={<ProfileServices />} />
        </Route>
      </Routes>
    </div>
  );
};

export default AdminApp;
