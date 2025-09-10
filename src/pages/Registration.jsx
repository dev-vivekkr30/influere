import { useState } from 'react';
import { Link } from 'react-router-dom';
import StepProgress from '../components/registration/StepProgress';
import CreateProfile from '../components/registration/CreateProfile';
import VerifyIdentity from '../components/registration/VerifyIdentity';
import FinalizeAccount from '../components/registration/FinalizeAccount';
import VideoCall from '../components/registration/VideoCall';
import SelectMembership from '../components/registration/SelectMembership';
import RegistrationComplete from '../components/registration/RegistrationComplete';
import RegistrationLayout from '../layouts/RegistrationLayout';

const Registration = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    // Step 1: Create Profile
    firstName: '',
    lastName: '',
    email: '',
    contactNumber: '',
    
    // Step 2: Verify Identity
    nationality: '',
    countryId: '',
    idType1: '',
    idFile1: null,
    idType2: '',
    idFile2: null,
    
    // Step 3: Finalize Account
    termsAccepted: false,
    
    // Step 4: Video Call
    videoMode: '',
    selectedDate: '',
    selectedTime: '',
    
    // Step 5: Select Membership
    membershipType: ''
  });

  const steps = [
    { id: 1, title: 'Create a Profile', component: CreateProfile },
    { id: 2, title: 'Verify your Identity', component: VerifyIdentity },
    { id: 3, title: 'Finalize your account', component: FinalizeAccount },
    { id: 4, title: 'Video call', component: VideoCall },
    { id: 5, title: 'Select Membership', component: SelectMembership }
  ];

  const handleNext = () => {
    if (currentStep < steps.length) {
      setCurrentStep(currentStep + 1);
    } else {
      // Registration completed, show completion page
      setCurrentStep(steps.length + 1);
    }
  };

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleFormDataChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  // Show completion page if registration is finished
  if (currentStep > steps.length) {
    return (
      <RegistrationLayout>
        <div className="registration-container">
          <div className="registration-content">
            <RegistrationComplete formData={formData} />
          </div>
        </div>
      </RegistrationLayout>
    );
  }

  const CurrentStepComponent = steps[currentStep - 1].component;

  return (
    <RegistrationLayout>
      <div className="registration-container">
        <div className="registration-header">
          <h1 className="registration-title mb-2">Registration</h1>
          <div className="line mb-3"></div>
          <StepProgress 
            steps={steps} 
            currentStep={currentStep} 
          />
        </div>
        
        <div className="registration-content">
          <CurrentStepComponent
            formData={formData}
            onFormDataChange={handleFormDataChange}
            onNext={handleNext}
            onBack={handleBack}
            isFirstStep={currentStep === 1}
            isLastStep={currentStep === steps.length}
          />
        </div>
      </div>
    </RegistrationLayout>
  );
};

export default Registration;
