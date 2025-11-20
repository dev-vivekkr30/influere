import React, { useState } from 'react';
import usePageTitle from '../../hooks/usePageTitle';
import consultancyData from '../data/consultancyData';
import '../components/ConsultancyModals.css';
import './ConsultancyCategoryPage.css';
import './CollaborationPage.css';

const collaborationProfiles = [
  {
    id: 'suryoday-bank-1',
    name: 'Suryoday Bank',
    avatar: consultancyData.legal.professionals[0].avatar,
    reach: '869k',
    rating: 4.5,
    ratingLabel: '4.5',
    tags: [
      { label: 'Post', value: '1k-5k' },
      { label: 'Report', value: '1k-5k' },
      { label: 'Descriptions', value: '100k-500k' },
      { label: 'Content', value: '1k-5k' },
    ],
    summary:
      'All day care treatments are valid. Get covered even with just 2 hours of hospitalization—no need to meet the 24-hour minimum requirement.',
  },
  {
    id: 'suryoday-bank-2',
    name: 'Suryoday Bank',
    avatar: consultancyData.legal.professionals[0].avatar,
    reach: '869k',
    rating: 4.5,
    ratingLabel: '4.5',
    tags: [
      { label: 'Post', value: '1k-5k' },
      { label: 'Report', value: '1k-5k' },
      { label: 'Descriptions', value: '100k-500k' },
      { label: 'Content', value: '1k-5k' },
    ],
    summary:
      'All day care treatments are valid. Get covered even with just 2 hours of hospitalization—no need to meet the 24-hour minimum requirement.',
  },
  {
    id: 'suryoday-bank-3',
    name: 'Suryoday Bank',
    avatar: consultancyData.legal.professionals[0].avatar,
    reach: '869k',
    rating: 4.5,
    ratingLabel: '4.5',
    tags: [
      { label: 'Post', value: '1k-5k' },
      { label: 'Content', value: '1k-5k' },
    ],
    summary:
      'All day care treatments are valid. Get covered even with just 2 hours of hospitalization—no need to meet the 24-hour minimum requirement.',
  },
  {
    id: 'profile-4',
    name: 'Tech Innovators',
    avatar: consultancyData.legal.professionals[0].avatar,
    reach: '1.2M',
    rating: 4.8,
    ratingLabel: '4.8',
    tags: [
      { label: 'Post', value: '5k-10k' },
      { label: 'Report', value: '5k-10k' },
      { label: 'Descriptions', value: '500k-1M' },
      { label: 'Content', value: '10k-50k' },
    ],
    summary:
      'Leading technology influencers specializing in software development, AI, and digital transformation. Perfect for tech product collaborations.',
  },
  {
    id: 'profile-5',
    name: 'Fashion Forward',
    avatar: consultancyData.legal.professionals[0].avatar,
    reach: '650k',
    rating: 4.6,
    ratingLabel: '4.6',
    tags: [
      { label: 'Post', value: '1k-5k' },
      { label: 'Content', value: '5k-10k' },
      { label: 'Descriptions', value: '100k-500k' },
    ],
    summary:
      'Fashion and lifestyle content creators with a strong following in beauty, style, and luxury brands. Ideal for fashion and beauty collaborations.',
  },
  {
    id: 'profile-6',
    name: 'Fitness Enthusiasts',
    avatar: consultancyData.legal.professionals[0].avatar,
    reach: '950k',
    rating: 4.7,
    ratingLabel: '4.7',
    tags: [
      { label: 'Post', value: '5k-10k' },
      { label: 'Report', value: '1k-5k' },
      { label: 'Content', value: '10k-50k' },
    ],
    summary:
      'Health and fitness influencers promoting wellness, nutrition, and active lifestyle. Great for fitness equipment and supplement brands.',
  },
  {
    id: 'profile-7',
    name: 'Food & Travel',
    avatar: consultancyData.legal.professionals[0].avatar,
    reach: '780k',
    rating: 4.4,
    ratingLabel: '4.4',
    tags: [
      { label: 'Post', value: '1k-5k' },
      { label: 'Descriptions', value: '100k-500k' },
      { label: 'Content', value: '5k-10k' },
    ],
    summary:
      'Culinary and travel content creators showcasing global cuisines and destinations. Perfect for restaurant chains and travel agencies.',
  },
  {
    id: 'profile-8',
    name: 'Business Leaders',
    avatar: consultancyData.legal.professionals[0].avatar,
    reach: '1.5M',
    rating: 4.9,
    ratingLabel: '4.9',
    tags: [
      { label: 'Post', value: '10k-50k' },
      { label: 'Report', value: '5k-10k' },
      { label: 'Descriptions', value: '1M-5M' },
      { label: 'Content', value: '50k-100k' },
    ],
    summary:
      'Entrepreneurs and business experts sharing insights on leadership, strategy, and innovation. Ideal for B2B and professional services.',
  },
  {
    id: 'profile-9',
    name: 'Gaming Community',
    avatar: consultancyData.legal.professionals[0].avatar,
    reach: '1.8M',
    rating: 4.8,
    ratingLabel: '4.8',
    tags: [
      { label: 'Post', value: '10k-50k' },
      { label: 'Content', value: '50k-100k' },
      { label: 'Descriptions', value: '1M-5M' },
    ],
    summary:
      'Gaming influencers and streamers with massive following in esports and gaming culture. Perfect for gaming hardware and software brands.',
  },
  {
    id: 'profile-10',
    name: 'Lifestyle Bloggers',
    avatar: consultancyData.legal.professionals[0].avatar,
    reach: '520k',
    rating: 4.3,
    ratingLabel: '4.3',
    tags: [
      { label: 'Post', value: '1k-5k' },
      { label: 'Report', value: '1k-5k' },
      { label: 'Content', value: '5k-10k' },
    ],
    summary:
      'Lifestyle bloggers covering home decor, parenting, and daily living tips. Great for home goods and family-oriented brands.',
  },
];

const CollaborationPage = () => {
  usePageTitle('Collaboration');
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

      <div className="collaboration-selection-count">
        {selectedProfiles.length} Selected out of {collaborationProfiles.length}
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

