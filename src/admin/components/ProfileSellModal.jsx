import React, { useMemo, useState } from "react";
import "../pages/Wallet.css";

const PLATFORM_OPTIONS = [
  "YouTube",
  "Instagram",
  "Facebook",
  "LinkedIn",
  "TikTok",
];

const SLIDER_MIN = 100;
const SLIDER_MAX = 1000;

const ProfileSellModal = ({ show, onClose }) => {
  const [platform, setPlatform] = useState("");
  const [profileUrl, setProfileUrl] = useState("");
  const [amount, setAmount] = useState("$500");
  const [sliderValue, setSliderValue] = useState(500);

  const sliderProgress = useMemo(() => {
    return ((sliderValue - SLIDER_MIN) / (SLIDER_MAX - SLIDER_MIN)) * 100;
  }, [sliderValue]);

  const sliderLabel = useMemo(() => {
    if (sliderValue >= 1000) {
      return "1M";
    }
    return `${Math.round(sliderValue / 10)}0k`;
  }, [sliderValue]);

  const handleSliderChange = (event) => {
    const value = Number(event.target.value);
    setSliderValue(value);
    setAmount(`$${value}`);
  };

  if (!show) {
    return null;
  }

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div
        className="modal-container add-funds-modal"
        onClick={(event) => event.stopPropagation()}
      >
        <button type="button" className="modal-close" onClick={onClose}>
          <i className="bi bi-x"></i>
        </button>

        <h2 className="modal-title">Sell Profile</h2>

        <div className="add-funds-section">
          <label className="form-label">Select Platform</label>
          <div className="">
            <select className=" w-100 form-input-group"
              value={platform}
              onChange={(event) => setPlatform(event.target.value)}
            >
              {PLATFORM_OPTIONS.map((option) => (
                <option key={option} value={option}>{option}</option>
              ))}
            </select>
          </div>
        </div>

        <div className="add-funds-section">
          <label className="form-label">Profile URL</label>
          <div className="form-input-group">
            <input
              type="text"
              value={profileUrl}
              onChange={(event) => setProfileUrl(event.target.value)}
            placeholder="https://www.youtube.com/@username" />
          </div>
        </div>

        <p className="withdraw-label" style={{ marginTop: "-8px" }}>
          Sell:- You may enter a fixed price or select a range
        </p>

        <div className="add-funds-section">
          <label className="form-label">Amount</label>
          <div className="form-input-group">
            <input
              type="text"
              value={amount}
              onChange={(event) => setAmount(event.target.value)}
            />
          </div>
        </div>

        <div className="add-funds-section">
          <label className="form-label">Suggested Range</label>
          <div className="sell-range-wrapper">
            <input
              type="range"
              min={SLIDER_MIN}
              max={SLIDER_MAX}
              value={sliderValue}
              onChange={handleSliderChange}
              className="sell-range-input"
            />
            <div className="sell-range-value" style={{ left: `${sliderProgress}%` }}>
              {sliderLabel}
            </div>
          </div>
        </div>

        <div className="modal-footer">
          <button type="button" className="btn-dark">
            Submit
          </button>
          <button type="button" className="btn-light" onClick={onClose}>
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProfileSellModal;
