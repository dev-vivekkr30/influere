import React, { useEffect, useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import './Sidebar.css';
import logo from '../../assets/logo.svg';
import PremiumModal from './PremiumModal';

const Sidebar = ({ 
  collapsed = false, 
  onToggle, 
  navigationItems = [],
  logo: logoProp = logo,
  companyName = "INFLUERE",
  tagline = "Collaborate With Professionals"
}) => {
  const [expandedItems, setExpandedItems] = useState(new Set());
  const [showPremiumModal, setShowPremiumModal] = useState(false);
  const location = useLocation();

  // Define premium feature IDs
  const premiumFeatures = ['professional-consultancy-premium', 'collaboration-premium'];

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
    const isPremium = premiumFeatures.includes(item.id);
    // Use 'end' prop for items with exact match or items with children
    const shouldUseEnd = item.exact || hasChildren;

    const handleClick = (e) => {
      if (isPremium) {
        e.preventDefault();
        setShowPremiumModal(true);
        return;
      }
      if (hasChildren) {
        e.preventDefault();
        toggleExpanded(item.id);
      }
    };

    // For premium items, render as a button instead of NavLink
    if (isPremium) {
      return (
        <div key={item.id} className="admin-nav-item">
          <button
            className="admin-nav-link admin-nav-link-premium"
            onClick={handleClick}
          >
            <div className="admin-nav-link-content">
              <span className="admin-nav-icon">
                <i className={`bi bi-${item.icon}`}></i>
              </span>
              {!collapsed && (
                <>
                  <span className="admin-nav-label">{item.label}</span>
                  <span className="premium-badge">
                    <i className="bi bi-lock-fill"></i>
                  </span>
                </>
              )}
            </div>
          </button>
        </div>
      );
    }

    return (
      <div key={item.id} className="admin-nav-item">
        <NavLink
          to={item.path}
          end={shouldUseEnd}
          className={({ isActive: navIsActive }) => 
            `admin-nav-link ${(navIsActive || isActive) && !hasActiveChildItem ? 'active' : ''} ${
              hasActiveChildItem ? 'has-active-child' : ''
            }`
          }
          onClick={handleClick}
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

  useEffect(() => {
    setExpandedItems(prev => {
      const next = new Set(prev);
      navigationItems.forEach(item => {
        if (item.children && item.children.some(child => location.pathname.startsWith(child.path))) {
          next.add(item.id);
        }
      });

      if (next.size === prev.size && [...next].every(id => prev.has(id))) {
        return prev;
      }
      return next;
    });
  }, [location.pathname, navigationItems]);

  return (
    <>
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

      {/* Premium Modal */}
      <PremiumModal 
        show={showPremiumModal} 
        onClose={() => setShowPremiumModal(false)} 
      />
    </>
  );
};

export default Sidebar;
