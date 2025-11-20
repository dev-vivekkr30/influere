import React from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import usePageTitle from '../../hooks/usePageTitle';
import { collaborationProfiles } from '../data/collaborationProfilesData';
import '../components/ConsultancyModals.css';
import './ConsultancyCategoryPage.css';
import './CollaborationPage.css';

const CollaborationShortlisted = () => {
  usePageTitle('Shortlisted Collaborations');
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  
  // Get selected profile IDs from URL params
  const selectedIdsParam = searchParams.get('ids');
  const selectedProfileIds = selectedIdsParam ? selectedIdsParam.split(',') : [];
  
  // Filter profiles to show only selected ones
  const shortlistedProfiles = collaborationProfiles.filter(profile =>
    selectedProfileIds.includes(profile.id)
  );

  const handleBackClick = () => {
    navigate('/dashboard/collaboration/list');
  };

  return (
    <div className="admin-page consultancy-page collaboration-page">
      <div className="profile-edit-header">
        <h1 className="admin-page-title">Shortlisted Collaborations</h1>
      </div>

      <div className="collaboration-selection-header">
        <div className="collaboration-selection-count">
          {shortlistedProfiles.length} Profile{shortlistedProfiles.length !== 1 ? 's' : ''} Shortlisted
        </div>
        <a 
          href="#"
          className="collaboration-back-link"
          onClick={(e) => {
            e.preventDefault();
            handleBackClick();
          }}
        >
          <i className="bi bi-arrow-left"></i> Back to List
        </a>
      </div>

      {shortlistedProfiles.length === 0 ? (
        <div className="text-center py-5">
          <p className="text-muted">No profiles shortlisted yet.</p>
        </div>
      ) : (
        <div className="consultancy-grid">
          {shortlistedProfiles.map((profile) => (
            <div
              key={profile.id}
              className="consultancy-card collaboration-card selected with-actions"
            >
              <div className="consultancy-card-header">
                <div className="consultancy-avatar">
                  <img src={profile.avatar} alt={profile.name} />
                </div>
                <div className="consultancy-card-meta">
                  <h3 className="consultancy-card-name">{profile.name}</h3>
                  <div className="consultancy-card-stats">
                    <span className="consultancy-reach">{profile.reach} Reach</span>
                    <span className="consultancy-rating">
                      {profile.ratingLabel}
                      <i className="bi bi-star-fill"></i>
                    </span>
                  </div>
                </div>
              </div>

              <div className="consultancy-card-tags">
                {profile.tags.map((tag, index) => (
                  <span key={index} className="consultancy-tag">
                    {tag.label}: {tag.value}
                  </span>
                ))}
              </div>

              <p className="consultancy-card-summary">{profile.summary}</p>

              <div className="collaboration-card-actions">
                <div className="collaboration-action-buttons">
                  <button type="button" className="btn-dark collaboration-action-btn">
                    Auction
                  </button>
                  <button type="button" className="btn-light collaboration-action-btn">
                    Offer
                  </button>
                  <button type="button" className="btn-light collaboration-action-btn">
                    Deal
                  </button>
                </div>
                <button 
                  type="button" 
                  className="collaboration-message-btn"
                  aria-label="Message"
                >
                  <i className="bi bi-chat-dots"></i>
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default CollaborationShortlisted;

