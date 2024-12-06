import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import './Css/Create.css';

function Create() {
  const history = useHistory();
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState({
    photo: null,
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
    address: '',
    city: '',
    state: '',
    zip: '',
    education: [{ id: Date.now(), degree: '', institution: '', startDate: '', endDate: '' }],
    experience: [{ id: Date.now(), title: '', company: '', startDate: '', endDate: '' }],
    skills: '',
    about: '',
    hobbies: '',
    portfolio: '',
    languages: '',
    dob: '',
    position: '',
    interests: '',
  });

  const handlePhotoChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setFormData({ ...formData, photo: reader.result });
      };
      reader.readAsDataURL(file);
    }
  };

  const handleChange = (event) => {
    const { id, value } = event.target;
    setFormData({ ...formData, [id]: value });
  };

  const handleEducationChange = (index, event) => {
    const { id, value } = event.target;
    const updatedEducation = [...formData.education];
    updatedEducation[index] = { ...updatedEducation[index], [id.split('-')[0]]: value };
    setFormData({ ...formData, education: updatedEducation });
  };

  const addEducation = () => {
    setFormData({
      ...formData,
      education: [...formData.education, { id: Date.now(), degree: '', institution: '', startDate: '', endDate: '' }],
    });
  };

  const removeEducation = (index) => {
    const updatedEducation = formData.education.filter((_, i) => i !== index);
    setFormData({ ...formData, education: updatedEducation });
  };

  const handleExperienceChange = (index, event) => {
    const { id, value } = event.target;
    const updatedExperience = [...formData.experience];
    updatedExperience[index] = { ...updatedExperience[index], [id.split('-')[0]]: value };
    setFormData({ ...formData, experience: updatedExperience });
  };

  const addExperience = () => {
    setFormData({
      ...formData,
      experience: [...formData.experience, { id: Date.now(), title: '', company: '', startDate: '', endDate: '' }],
    });
  };

  const removeExperience = (index) => {
    const updatedExperience = formData.experience.filter((_, i) => i !== index);
    setFormData({ ...formData, experience: updatedExperience });
  };

  const nextStep = () => {
    setCurrentStep(currentStep + 1);
  };

  const previousStep = () => {
    setCurrentStep(currentStep - 1);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (currentStep < 3) {
      nextStep();
    } else {
      history.push('/resume', { formData });
    }
  };

  return (
    <div className="create-container">
      <h1>Create Your Resume</h1>
      <form className="resume-form" onSubmit={handleSubmit}>
        {currentStep === 0 && (
          <>
            <h2>Personal Information</h2>
            <div className="form-group">
              <label htmlFor="photo">Upload Photo</label>
              <input type="file" id="photo" accept="image/*" onChange={handlePhotoChange} required />
            </div>
            {formData.photo && (
              <div className="photo-preview">
                <img src={formData.photo} alt="Profile Preview" className="profile-photo" />
              </div>
            )}
            {['firstName', 'lastName', 'phone', 'email', 'address', 'city', 'zip'].map((field) => (
              <div className="form-group" key={field}>
                <label htmlFor={field}>{field.replace(/([A-Z])/g, ' $1').replace(/^./, (str) => str.toUpperCase())}</label>
                <input
                  type={field === 'phone' ? 'tel' : 'text'}
                  id={field}
                  value={formData[field]}
                  onChange={handleChange}
                  placeholder={`Enter your ${field}`}
                  required
                />
              </div>
            ))}
            <div className="form-group">
              <label htmlFor="state">State</label>
              <select id="state" value={formData.state} onChange={handleChange} required>
                <option value="">Choose...</option>
                <option>Andhra Pradesh</option>
                <option>Arunachal Pradesh</option>
                <option>Assam</option>
                <option>Bihar</option>
                <option>Chhattisgarh</option>
                <option>Goa</option>
                <option>Gujarat</option>
                <option>Haryana</option>
                <option>Himachal Pradesh</option>
                <option>Jharkhand</option>
                <option>Karnataka</option>
                <option>Kerala</option>
                <option>Madhya Pradesh</option>
                <option>Maharashtra</option>
                <option>Manipur</option>
                <option>Meghalaya</option>
                <option>Mizoram</option>
                <option>Nagaland</option>
                <option>Odisha</option>
                <option>Punjab</option>
                <option>Rajasthan</option>
                <option>Sikkim</option>
                <option>Tamil Nadu</option>
                <option>Telangana</option>
                <option>Tripura</option>
                <option>Uttar Pradesh</option>
              </select>
            </div>
          </>
        )}

        {currentStep === 1 && (
          <>
            <h2>Education</h2>
            {formData.education.map((edu, index) => (
              <div key={edu.id} className="education-entry">
                {['degree', 'institution', 'startDate', 'endDate'].map((field) => (
                  <div className="form-group" key={field}>
                    <label htmlFor={`${field}-${edu.id}`}>{field.replace(/([A-Z])/g, ' $1').replace(/^./, (str) => str.toUpperCase())}</label>
                    <input
                      type={field.includes('Date') ? 'date' : 'text'}
                      id={`${field}-${edu.id}`}
                      value={edu[field]}
                      onChange={(e) => handleEducationChange(index, e)}
                      placeholder={`Your ${field}`}
                      required
                    />
                  </div>
                ))}
                <button type="button" className="remove-button" onClick={() => removeEducation(index)}>Remove</button>
              </div>
            ))}
            <button type="button" className="add-button" onClick={addEducation}>Add More Education</button>
          </>
        )}

        {currentStep === 2 && (
          <>
            <h2>Work Experience</h2>
            {formData.experience.map((exp, index) => (
              <div key={exp.id} className="experience-entry">
                {['title', 'company', 'startDate', 'endDate'].map((field) => (
                  <div className="form-group" key={field}>
                    <label htmlFor={`${field}-${exp.id}`}>{field.replace(/([A-Z])/g, ' $1').replace(/^./, (str) => str.toUpperCase())}</label>
                    <input
                      type={field.includes('Date') ? 'date' : 'text'}
                      id={`${field}-${exp.id}`}
                      value={exp[field]}
                      onChange={(e) => handleExperienceChange(index, e)}
                      placeholder={`Enter your ${field}`}
                      required
                    />
                  </div>
                ))}
                <button type="button" className="remove-button" onClick={() => removeExperience(index)}>Remove</button>
              </div>
            ))}
            <button type="button" className="add-button" onClick={addExperience}>Add More Experience</button>
          </>
        )}

        {currentStep === 3 && (
          <>
            <h2>Additional Information</h2>
            {['skills', 'about', 'hobbies', 'portfolio', 'languages', 'dob', 'position', 'interests'].map((field) => (
              <div className="form-group" key={field}>
                <label htmlFor={field}>{field.replace(/([A-Z])/g, ' $1').replace(/^./, (str) => str.toUpperCase())}</label>
                {field === 'about' || field === 'interests' ? (
                  <textarea
                    id={field}
                    value={formData[field]}
                    onChange={handleChange}
                    placeholder={`Enter your ${field}`}
                    required
                  ></textarea>
                ) : (
                  <input
                    type={field === 'portfolio' ? 'url' : field !== 'dob' ? 'text' : 'date'}
                    id={field}
                    value={formData[field]}
                    onChange={handleChange}
                    placeholder={`Enter your ${field}`}
                    required={field !== 'portfolio'}
                  />
                )}
              </div>
            ))}
          </>
        )}

        <div className="form-navigation">
          {currentStep > 0 && <button type="button" onClick={previousStep}>Previous</button>}
          <button type="submit">{currentStep === 3 ? 'Create Resume' : 'Next'}</button>
        </div>
      </form>
    </div>
  );
}

export default Create;
