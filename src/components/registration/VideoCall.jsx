import zoom from '../../assets/zoom.svg';
const VideoCall = ({ formData, onFormDataChange, onNext, onBack, isFirstStep, isLastStep }) => {
  const handleInputChange = (field, value) => {
    onFormDataChange(field, value);
  };

  const handleCheckboxChange = (field, checked) => {
    onFormDataChange(field, checked);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.videoMode && formData.selectedDate && formData.selectedTime) {
      onNext();
    }
  };

  return (
    <div className="step-content">
      <div className="step-header">
        <h2 className="step-title">Get On a Video</h2>
        <p className="step-question">What video calling mode do you prefer?</p>
      </div>

      <form onSubmit={handleSubmit} className="registration-form">
        <div className="video-options">
          <label className="checkbox-label video-option">
            <input
              type="checkbox"
              className="checkbox-input"
              checked={formData.videoMode === 'zoom'}
              onChange={(e) => handleInputChange('videoMode', e.target.checked ? 'zoom' : '')}
            />
            <span className="checkbox-custom"></span>
            <div className="video-option-content">
              <div className="video-option-icon">
                <img src={zoom} alt="Zoom" />
              </div>
              <span className="video-option-text">Zoom</span>
            </div>
          </label>
        </div>

        <div className="form-row">
          <div className="form-group">
            <label htmlFor="selectedDate" className="form-label">Select Date</label>
            <div className="date-input-wrapper">
              <input
                type="date"
                id="selectedDate"
                className="form-control"
                value={formData.selectedDate}
                onChange={(e) => handleInputChange('selectedDate', e.target.value)}
                required
              />
              
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="selectedTime" className="form-label">Select Time</label>
            <div className="time-input-wrapper">
              <input
                type="time"
                id="selectedTime"
                className="form-control"
                value={formData.selectedTime}
                onChange={(e) => handleInputChange('selectedTime', e.target.value)}
                required
              />
              {/* <svg className="clock-icon" width="20" height="20" viewBox="0 0 24 24" fill="none">
                <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/>
                <polyline points="12,6 12,12 16,14" stroke="currentColor" strokeWidth="2"/>
              </svg> */}
            </div>
          </div>
        </div>

        <div className="form-actions">
          <button type="button" className="btn btn-back" onClick={onBack}>
            Back
          </button>
          <button type="submit" className="btn btn-next">
            Next
          </button>
        </div>
      </form>
    </div>
  );
};

export default VideoCall;
