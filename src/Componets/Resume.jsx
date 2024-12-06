import React, { useRef } from 'react';
import { useLocation } from 'react-router-dom';
import './Css/Resume.css'
import html2pdf from 'html2pdf.js';

function Resume() {
  const { state } = useLocation();
  const formData = state?.formData || {};

  const {
    photo, firstName, lastName, position, phone, email, address, city, state: formState, zip, dob,
    languages, skills, hobbies, portfolio, about, education, experience, interests
  } = formData;

  // Create a ref for the resume container
  const resumeRef = useRef(null);

  // Function to download the PDF
  const downloadResume = () => {
    const element = resumeRef.current;
    const opt = {
      margin: [10, 10], // Adjust margins (top, left, right, bottom)
      filename: `${firstName || 'resume'}.pdf`,
      image: { type: 'jpeg', quality: 0.98 },
      html2canvas: { scale: 3 }, // Higher scale for better quality
      jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' } // A4 size in mm
    };

    html2pdf().from(element).set(opt).save();
  };

  return (
    <div>
      <button onClick={downloadResume} className="download-btn">
        Download PDF
      </button>
      <div className="resume-container" ref={resumeRef}>
        <header className="resume-header">
          <div className="resume-photo-wrapper">
            {photo && (
              <img src={photo} alt="Profile" className="resume-photo" />
            )}
          </div>
          <div className="resume-name-contact">
            <h1>{firstName || 'No Name Provided'} {lastName || ''}</h1>
            <p className="position">{position || 'Position not specified'}</p>
            <div className="contact-info">
              <p>{phone || 'No phone number provided.'}</p>
              <p>{email || 'No email provided.'}</p>
              <p>
                {address || 'No address provided'}, {city || ''}, {formState || ''} - {zip || 'No ZIP code provided.'}
              </p>
            </div>
          </div>
        </header>

        <div className="resume-body">
          {/* Left Section */}
          <div className="left-section">
            <section className="section dob-section">
              <h2>Date of Birth</h2>
              <p>{dob || 'Date of birth not provided.'}</p>
            </section>

            <section className="section languages-section">
              <h2>Languages</h2>
              <p>{languages || 'No languages provided.'}</p>
            </section>

            <section className="section skills-section">
              <h2>Skills</h2>
              <p>{skills || 'No skills provided.'}</p>
            </section>

            <section className="section hobbies-section">
              <h2>Hobbies</h2>
              <p>{hobbies || 'No hobbies provided.'}</p>
            </section>

            <section className="section portfolio-section">
              <h2>Portfolio</h2>
              <p>{portfolio || 'No portfolio provided.'}</p>
            </section>
          </div>

          {/* Right Section */}
          <div className="right-section">
            <section className="section about-section">
              <h2>About Me</h2>
              <p>{about || 'No information provided.'}</p>
            </section>

            <section className="section education-section">
              <h2>Education</h2>
              {Array.isArray(education) && education.length > 0 ? (
                education.map((edu, index) => (
                  <div key={edu.id || index} className="education-entry">
                    <p><strong>{edu.degree || 'Degree not specified.'}</strong> at {edu.institution || 'Institution not specified.'}</p>
                    <p>{edu.startDate || 'Start date not provided'} - {edu.endDate || 'End date not provided'}</p>
                  </div>
                ))
              ) : (
                <p>No education information provided.</p>
              )}
            </section>

            <section className="section experience-section">
              <h2>Experience</h2>
              {Array.isArray(experience) && experience.length > 0 ? (
                experience.map((exp, index) => (
                  <div key={index} className="experience-entry">
                    <p><strong>{exp.position || 'No position specified.'}</strong> at {exp.company || 'Company not specified.'}</p>
                    <p>{exp.details || 'No experience details provided.'}</p>
                  </div>
                ))
              ) : (
                <p>No work experience provided.</p>
              )}
            </section>

            <section className="section interests-section">
              <h2>Interests</h2>
              <p>{interests || 'No interests specified.'}</p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Resume;


// //import './Css/Resume.css';
 
