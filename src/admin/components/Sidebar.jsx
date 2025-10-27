import React, { useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import './Sidebar.css';
import logo from '../../assets/logo.svg';

const Sidebar = ({ 
  collapsed = false, 
  onToggle, 
  navigationItems = [],
  logo: logoProp = logo,
  companyName = "INFLUERE",
  tagline = "Collaborate With Professionals"
}) => {
  const [expandedItems, setExpandedItems] = useState(new Set());
  const location = useLocation();

  const toggleExpanded = (itemId) => {
    const newExpanded = new Set(expandedItems);
    if (newExpanded.has(itemId)) {
      newExpanded.delete(itemId);
    } else {
      newExpanded.add(itemId);
    }
    setExpandedItems(newExpanded);
  };

  const isItemActive = (item) => {
    if (item.exact) {
      return location.pathname === item.path;
    }
    return location.pathname.startsWith(item.path);
  };

  const hasActiveChild = (item) => {
    if (!item.children) return false;
    return item.children.some(child => 
      location.pathname.startsWith(child.path)
    );
  };

  const renderNavItem = (item, level = 0) => {
    const hasChildren = item.children && item.children.length > 0;
    const isExpanded = expandedItems.has(item.id);
    const isActive = isItemActive(item);
    const hasActiveChildItem = hasActiveChild(item);

    return (
      <div key={item.id} className="admin-nav-item">
        <NavLink
          to={item.path}
          className={({ isActive: navIsActive }) => 
            `admin-nav-link ${navIsActive || isActive ? 'active' : ''} ${
              hasActiveChildItem ? 'has-active-child' : ''
            }`
          }
          onClick={() => {
            if (hasChildren) {
              toggleExpanded(item.id);
            }
          }}
        >
          <div className="admin-nav-link-content">
            <span className="admin-nav-icon">
              <i className={`bi bi-${item.icon}`}></i>
            </span>
            {!collapsed && (
              <>
                <span className="admin-nav-label">{item.label}</span>
                {hasChildren && (
                  <span className={`admin-nav-arrow ${isExpanded ? 'expanded' : ''}`}>
                    <i className="bi bi-chevron-up"></i>
                  </span>
                )}
              </>
            )}
          </div>
        </NavLink>

        {hasChildren && !collapsed && isExpanded && (
          <div className="admin-nav-children">
            {item.children.map(child => renderNavItem(child, level + 1))}
          </div>
        )}
      </div>
    );
  };

  return (
    <aside 
      className={`admin-sidebar ${collapsed ? 'collapsed' : ''}`}
      style={{ 
        width: collapsed ? 'var(--admin-sidebar-collapsed)' : 'var(--admin-sidebar-width)' 
      }}
    >
      {/* Sidebar Header */}
      <div className="admin-sidebar-header">
        {!collapsed && (
          <div className="admin-logo">
            <img 
              src={logoProp} 
              alt={companyName}
              className="admin-logo-img"
            />
          </div>
        )}
        {collapsed && (
          <div className="admin-logo-collapsed">
            <img 
              src={logoProp} 
              alt={companyName}
              className="admin-logo-img"
            />
          </div>
        )}
      </div>

      {/* Sidebar Navigation */}
      <nav className="admin-sidebar-nav">
        {navigationItems.map(item => renderNavItem(item))}
      </nav>

    </aside>
  );
};

export default Sidebar;
