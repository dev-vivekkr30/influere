import React, { useState } from "react";
import usePageTitle from "../../hooks/usePageTitle";
import profilePlatforms from "../data/profilePlatforms";
import photoPlaceholder from "../../assets/photo-placeholder.png";
import "./ProfileEdit.css";

const ProfileEdit = () => {
  usePageTitle("Edit Profile");
  const [socialLinks, setSocialLinks] = useState([
    { id: 1, platform: "", url: "" },
  ]);

  const handleAddLink = () => {
    setSocialLinks((prev) => [
      ...prev,
      { id: Date.now(), platform: "", url: "" },
    ]);
  };

  const handleRemoveLink = (id) => {
    setSocialLinks((prev) => prev.filter((link) => link.id !== id));
  };

  const handleLinkChange = (id, field, value) => {
    setSocialLinks((prev) =>
      prev.map((link) =>
        link.id === id
          ? {
              ...link,
              [field]: value,
            }
          : link
      )
    );
  };

  return (
    <div className="admin-page profile-edit-page">
      <div className="profile-edit-header">
        <h1 className="admin-page-title">Edit Profile</h1>
      </div>

      <div className="profile-edit-card">
        <section className="profile-edit-section">
          <h2 className="profile-edit-subtitle">Profile Picture</h2>
          <div className="profile-picture-row">
            <div className="profile-picture-placeholder">
              <img src={photoPlaceholder} alt="Profile placeholder" />
            </div>
            <div className="profile-picture-upload">
              <p>No Profile Picture Uploaded</p>
              <label className="form-input-group profile-upload-field">
                <input type="file" hidden />
                <span>Upload</span>
                <i className="bi bi-paperclip"></i>
              </label>
            </div>
          </div>
        </section>

        <section className="profile-edit-section">
          <h2 className="profile-edit-subtitle">Contact Details</h2>
          <div className="profile-edit-grid">
            <div className="form-input-group">
              <input type="email" placeholder="Email ID" />
            </div>
            <div className="form-input-group">
              <input type="tel" placeholder="Phone Number" />
            </div>
            <div className="form-input-group">
              <input type="text" placeholder="Country" />
            </div>
            <div className="form-input-group">
              <input type="text" placeholder="City" />
            </div>
            <div className="form-input-group">
              <input type="text" placeholder="Zip Code" />
            </div>
          </div>
        </section>

        <section className="profile-edit-section">
          <h2 className="profile-edit-subtitle">Social Connections Links</h2>
          <div className="social-links-list">
            {socialLinks.map((link) => (
              <div key={link.id} className="social-link-row">
                <div className="social-link-platform">
                  <label>Select Platform</label>
                  <select className="w-100 form-input-group"
                      value={link.platform}
                      onChange={(event) =>
                        handleLinkChange(link.id, "platform", event.target.value)
                      }
                    >
                      <option value="">Select Platform</option>
                      {profilePlatforms.map((platform) => (
                        <option key={platform} value={platform}>
                          {platform}
                        </option>
                      ))}
                    </select>
                </div>
                <div className="social-link-url">
                  <label>Add URL</label>
                  <div className="form-input-group">
                    <input
                      type="url"
                      placeholder="Enter"
                      value={link.url}
                      onChange={(event) =>
                        handleLinkChange(link.id, "url", event.target.value)
                      }
                    />
                  </div>
                </div>
                <div className="social-link-actions">
                  {socialLinks.length > 1 && (
                    <button
                      type="button"
                      className="remove-btn"
                      onClick={() => handleRemoveLink(link.id)}
                    >
                      <i className="bi bi-trash"></i>
                    </button>
                  )}
                  {link === socialLinks[socialLinks.length - 1] && (
                    <button
                      type="button"
                      className="add-btn"
                      onClick={handleAddLink}
                    >
                      <i className="bi bi-plus"></i>
                    </button>
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default ProfileEdit;
