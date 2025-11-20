import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import usePageTitle from '../../hooks/usePageTitle';
import { collaborationProfiles } from '../data/collaborationProfilesData';
import '../components/ConsultancyModals.css';
import './ConsultancyCategoryPage.css';
import './CollaborationPage.css';

const CollaborationPage = () => {
  usePageTitle('Collaboration');
  const navigate = useNavigate();
  const [selectedProfiles, setSelectedProfiles] = useState(['suryoday-bank-1', 'suryoday-bank-2']);
  const [locationTags, setLocationTags] = useState(['New Delhi', 'Rajkot']);
  const [merchandiseCheckbox, setMerchandiseCheckbox] = useState(false);

  const handleCardClick = (profile) => {
    handleProfileSelect(profile.id);
  };

  const handleProfileSelect = (profileId) => {
    setSelectedProfiles((prev) =>
      prev.includes(profileId)
        ? prev.filter((id) => id !== profileId)
        : [...prev, profileId]
    );
  };

  const removeLocationTag = (tag) => {
    setLocationTags((prev) => prev.filter((t) => t !== tag));
  };

  const handleShowShortlisted = () => {
    if (selectedProfiles.length > 0) {
      const idsParam = selectedProfiles.join(',');
      navigate(`/dashboard/collaboration/shortlisted?ids=${idsParam}`);
    }
  };

  return (
    <div className="admin-page consultancy-page collaboration-page">
      <div className="profile-edit-header">
        <h1 className="admin-page-title">Collaboration List</h1>
      </div>
      <div className="collaboration-filters-bar">
        <div className="consultancy-filter w-100">
          <div className="consultancy-select p-0">
            <select defaultValue="" className='px-2'>
              <option value="" disabled>
                Select
              </option>
              <option value="option1">Option 1</option>
              <option value="option2">Option 2</option>
            </select>
            <span className="consultancy-select-caret">
              <i className="bi bi-chevron-down"></i>
            </span>
          </div>
        </div>
        <div className="consultancy-filter w-100">
          <div className="consultancy-select p-0">
            <select defaultValue="" className='px-2'>
              <option value="" disabled>
                Select
              </option>
              <option value="option1">Option 1</option>
              <option value="option2">Option 2</option>
            </select>
            <span className="consultancy-select-caret">
              <i className="bi bi-chevron-down"></i>
            </span>
          </div>
        </div>
        <div className="consultancy-filter w-100">
          <div className="consultancy-select p-0">
            <select defaultValue="" className='px-2'>
              <option value="" disabled>
                Select
              </option>
              <option value="option1">Option 1</option>
              <option value="option2">Option 2</option>
            </select>
            <span className="consultancy-select-caret">
              <i className="bi bi-chevron-down"></i>
            </span>
          </div>
        </div>
      </div>

      <div className="collaboration-merchandise-checkbox">
        <label className="collaboration-checkbox-label">
          <input
            type="checkbox"
            checked={merchandiseCheckbox}
            onChange={(e) => setMerchandiseCheckbox(e.target.checked)}
          />
          <span>Open to receive Merchandise product</span>
        </label>
      </div>

      <div className="collaboration-selection-header">
        <div className="collaboration-selection-count">
          {selectedProfiles.length} Selected out of {collaborationProfiles.length}
        </div>
        <button 
          type="button" 
          className="btn-dark collaboration-show-shortlisted-btn"
          onClick={handleShowShortlisted}
          disabled={selectedProfiles.length === 0}
        >
          Show Shortlisted
        </button>
      </div>

      <div className="consultancy-grid">
        {collaborationProfiles.map((profile) => {
          const isSelected = selectedProfiles.includes(profile.id);
          return (
            <div
              key={profile.id}
              className={`consultancy-card collaboration-card ${isSelected ? 'selected' : ''}`}
              role="button"
              tabIndex={0}
              onClick={() => handleCardClick(profile)}
              onKeyPress={(event) => {
                if (event.key === 'Enter') {
                  handleCardClick(profile);
                }
              }}
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
            </div>
          );
        })}
      </div>

    </div>
  );
};

export default CollaborationPage;

