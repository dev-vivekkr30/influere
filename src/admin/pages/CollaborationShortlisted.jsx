import React, { useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import usePageTitle from '../../hooks/usePageTitle';
import { collaborationProfiles } from '../data/collaborationProfilesData';
import '../components/ConsultancyModals.css';
import './ConsultancyCategoryPage.css';
import './CollaborationPage.css';
import './Wallet.css';

const CollaborationShortlisted = () => {
  usePageTitle('Shortlisted Collaborations');
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const [showAuctionModal, setShowAuctionModal] = useState(false);
  const [showOfferModal, setShowOfferModal] = useState(false);
  const [showMessageModal, setShowMessageModal] = useState(false);
  const [selectedProfile, setSelectedProfile] = useState(null);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [successModalType, setSuccessModalType] = useState('auction'); // 'auction', 'offer', 'deal'
  const [auctionData, setAuctionData] = useState({
    minPrice: '',
    maxPrice: '',
    days: false,
    hours: false,
  });
  const [offerData, setOfferData] = useState({
    currentValue: '',
    endsIn: '',
  });
  const [messageData, setMessageData] = useState({
    name: '',
    message: '',
    file: null,
  });
  
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

  const handleAuctionClick = (profile) => {
    setSelectedProfile(profile);
    setShowAuctionModal(true);
    setAuctionData({
      minPrice: '',
      maxPrice: '',
      days: false,
      hours: false,
    });
  };

  const handleAuctionSubmit = (e) => {
    e.preventDefault();
    setShowAuctionModal(false);
    setSuccessModalType('auction');
    setShowSuccessModal(true);
  };

  const handleAuctionCancel = () => {
    setShowAuctionModal(false);
    setSelectedProfile(null);
    setAuctionData({
      minPrice: '',
      maxPrice: '',
      days: false,
      hours: false,
    });
  };

  const handleOfferClick = (profile) => {
    setSelectedProfile(profile);
    setShowOfferModal(true);
    setOfferData({
      currentValue: '',
      endsIn: '',
    });
  };

  const handleOfferSubmit = (e) => {
    e.preventDefault();
    setShowOfferModal(false);
    setSuccessModalType('offer');
    setShowSuccessModal(true);
  };

  const handleDealClick = (profile) => {
    setSelectedProfile(profile);
    setSuccessModalType('deal');
    setShowSuccessModal(true);
  };

  const handleMessageClick = (profile) => {
    setSelectedProfile(profile);
    setShowMessageModal(true);
    setMessageData({
      name: '',
      message: '',
      file: null,
    });
  };

  const handleMessageSubmit = (e) => {
    e.preventDefault();
    setShowMessageModal(false);
    setSelectedProfile(null);
    setMessageData({
      name: '',
      message: '',
      file: null,
    });
  };

  const handleMessageCancel = () => {
    setShowMessageModal(false);
    setSelectedProfile(null);
    setMessageData({
      name: '',
      message: '',
      file: null,
    });
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setMessageData({ ...messageData, file });
    }
  };

  const handleOfferCancel = () => {
    setShowOfferModal(false);
    setSelectedProfile(null);
    setOfferData({
      currentValue: '',
      endsIn: '',
    });
  };

  const handleSuccessClose = (e) => {
    if (e) {
      e.preventDefault();
      e.stopPropagation();
    }
    setShowSuccessModal(false);
    setSelectedProfile(null);
    setSuccessModalType('auction');
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
                  <button 
                    type="button" 
                    className="btn-dark collaboration-action-btn"
                    onClick={() => handleAuctionClick(profile)}
                  >
                    Auction
                  </button>
                  <button 
                    type="button" 
                    className="btn-light collaboration-action-btn"
                    onClick={() => handleOfferClick(profile)}
                  >
                    Offer
                  </button>
                  <button 
                    type="button" 
                    className="btn-light collaboration-action-btn"
                    onClick={() => handleDealClick(profile)}
                  >
                    Deal
                  </button>
                </div>
                <button 
                  type="button" 
                  className="collaboration-message-btn"
                  aria-label="Message"
                  onClick={() => handleMessageClick(profile)}
                >
                  <i className="bi bi-chat-dots"></i>
                </button>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Auction Modal */}
      {showAuctionModal && selectedProfile && (
        <div className="modal-overlay" onClick={handleAuctionCancel}>
          <div className="modal-container add-funds-modal" onClick={(e) => e.stopPropagation()}>
            <button type="button" className="modal-close" onClick={handleAuctionCancel}>
              <i className="bi bi-x"></i>
            </button>
            
            <h2 className="modal-title">Auction as Collaborator</h2>
            
            <form onSubmit={handleAuctionSubmit}>
              <div className="add-funds-section">
                <label className="form-label">Price bid</label>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
                  <div className="form-input-group">
                    <input
                      type="number"
                      placeholder="Min"
                      value={auctionData.minPrice}
                      onChange={(e) => setAuctionData({ ...auctionData, minPrice: e.target.value })}
                      required
                    />
                  </div>
                  <div className="form-input-group">
                    <input
                      type="number"
                      placeholder="Max"
                      value={auctionData.maxPrice}
                      onChange={(e) => setAuctionData({ ...auctionData, maxPrice: e.target.value })}
                      required
                    />
                  </div>
                </div>
              </div>

              <div className="add-funds-section">
                <div style={{ display: 'flex', gap: '16px' }}>
                  <label className="collaboration-checkbox-label m-0">
                    <input
                      type="checkbox"
                      checked={auctionData.days}
                      onChange={(e) => setAuctionData({ ...auctionData, days: e.target.checked })}
                    />
                    <span>Days</span>
                  </label>
                  <label className="collaboration-checkbox-label">
                    <input
                      type="checkbox"
                      checked={auctionData.hours}
                      onChange={(e) => setAuctionData({ ...auctionData, hours: e.target.checked })}
                    />
                    <span>Hours</span>
                  </label>
                </div>
              </div>

              <p style={{ fontSize: '12px', color: '#666', marginTop: '-8px', marginBottom: '16px' }}>
                ( If no one bid, auction gets cancelled. )
              </p>

              <div className="modal-footer">
              <button type="submit" className="btn-dark">
                  Submit
                </button>
                <button type="button" className="btn-light" onClick={handleAuctionCancel}>
                  Cancel
                </button>
                
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Offer Modal */}
      {showOfferModal && selectedProfile && (
        <div className="modal-overlay" onClick={handleOfferCancel}>
          <div className="modal-container add-funds-modal" onClick={(e) => e.stopPropagation()}>
            <button type="button" className="modal-close" onClick={handleOfferCancel}>
              <i className="bi bi-x"></i>
            </button>
            
            <h2 className="modal-title">Auction as Influencer</h2>
            
            <form onSubmit={handleOfferSubmit}>
              <div className="add-funds-section">
                <label className="form-label">Current Value</label>
                <div className="form-input-group">
                  <input
                    type="number"
                    placeholder="Enter current value"
                    value={offerData.currentValue}
                    onChange={(e) => setOfferData({ ...offerData, currentValue: e.target.value })}
                    required
                  />
                </div>
              </div>

              <div className="add-funds-section">
                <label className="form-label">Ends In</label>
                <div className="form-input-group">
                  <input
                    type="number"
                    placeholder="Enter number"
                    value={offerData.endsIn}
                    onChange={(e) => setOfferData({ ...offerData, endsIn: e.target.value })}
                    required
                  />
                </div>
                <p style={{ fontSize: '12px', color: '#666', marginTop: '8px', marginBottom: '0' }}>
                  Mins date xtime
                </p>
              </div>

              <div className="modal-footer">
                <button type="submit" className="btn-dark">
                  Place bid
                </button>
                <button type="button" className="btn-light" onClick={handleOfferCancel}>
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Message Modal */}
      {showMessageModal && selectedProfile && (
        <div className="modal-overlay" onClick={handleMessageCancel}>
          <div className="modal-container add-funds-modal" onClick={(e) => e.stopPropagation()}>
            <button type="button" className="modal-close" onClick={handleMessageCancel}>
              <i className="bi bi-x"></i>
            </button>
            
            <h2 className="modal-title">Send Message</h2>
            
            <form onSubmit={handleMessageSubmit}>
              <div className="add-funds-section">
                <label className="form-label">Name</label>
                <div className="form-input-group">
                  <input
                    type="text"
                    placeholder="Enter your name"
                    value={messageData.name}
                    onChange={(e) => setMessageData({ ...messageData, name: e.target.value })}
                    required
                  />
                </div>
              </div>

              <div className="add-funds-section">
                <label className="form-label">Message</label>
                <div className="form-input-group" style={{ alignItems: 'flex-start', minHeight: '100px' }}>
                  <textarea
                    placeholder="Enter your message"
                    value={messageData.message}
                    onChange={(e) => setMessageData({ ...messageData, message: e.target.value })}
                    rows="4"
                    required
                    style={{ 
                      flex: 1,
                      border: 'none', 
                      outline: 'none',
                      resize: 'vertical',
                      fontFamily: 'inherit',
                      fontSize: '14px',
                      padding: '0',
                      background: 'transparent',
                      minHeight: '80px'
                    }}
                  />
                </div>
              </div>

              <div className="add-funds-section">
                <label className="form-label">Upload File</label>
                <div className="file-upload">
                  <input
                    type="file"
                    id="messageFile"
                    className="file-input"
                    onChange={handleFileChange}
                  />
                  <label htmlFor="messageFile" className="file-upload-label">
                    <i className="bi bi-cloud-arrow-up"></i>
                    <span>{messageData.file ? messageData.file.name : 'Choose File'}</span>
                  </label>
                </div>
              </div>

              <div className="modal-footer">
                <button type="submit" className="btn-dark">
                  Submit
                </button>
                <button type="button" className="btn-light" onClick={handleMessageCancel}>
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Success Modal */}
      {showSuccessModal && (
        <div className="modal-overlay" onClick={handleSuccessClose}>
          <div className="modal-container pt-0 w-100 payment-result-modal" onClick={(e) => e.stopPropagation()}>
            <button 
              type="button" 
              className="modal-close" 
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                handleSuccessClose();
              }}
            >
              <i className="bi bi-x"></i>
            </button>
            
            <div className="payment-result-content mt-0">
              <div className="payment-result-icon success">
                <i className="bi bi-check-circle-fill"></i>
              </div>
              <h2 className="payment-result-title text-dark">
                {successModalType === 'auction' && 'Auction Created Successfully!'}
                {successModalType === 'offer' && 'Offer Placed Successfully!'}
                {successModalType === 'deal' && 'Deal Accepted Successfully!'}
              </h2>
              <p className="payment-result-message">
                {successModalType === 'auction' && 'Your auction has been created and is now live.'}
                {successModalType === 'offer' && 'Your offer has been placed successfully and is now active.'}
                {successModalType === 'deal' && 'Congratulations! The deal has been accepted and you can now proceed with the collaboration.'}
              </p>
              {/* <button type="button" className="btn-dark" onClick={handleSuccessClose}>
                OK
              </button> */}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CollaborationShortlisted;

