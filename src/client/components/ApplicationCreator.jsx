import React, { useState, useEffect } from 'react';

const ApplicationCreator = ({ onAdd }) => {
  const [newApp, setNewApp] = useState({
    dateApplied: '',
    resumeVersion: '',
    company: '',
    companyContactInfo: '',
    jobTitle: '',
    jobSource: '',
    followedUp: '',
    followedUpDate: '',
    receivedResponse: '',
    notes: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewApp((prev) => ({ ...prev, [name]: value }));
  };

  const handleAddApplication = async () => {
    const { dateApplied, resumeVersion, company, jobTitle, jobSource } = newApp;
    if (!dateApplied || !resumeVersion || !company || !jobTitle || !jobSource)
      return;

    try {
      const response = await fetch('http://localhost:3000/allapps', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newApp),
      });

      if (!response.ok) {
        throw new Error('Failed to add application');
      }

      const addedApp = await response.json();
      onAdd(addedApp);
      setNewApp({
        dateApplied: '',
        resumeVersion: '',
        company: '',
        companyContactInfo: '',
        jobTitle: '',
        jobSource: '',
        followedUp: '',
        followedUpDate: '',
        receivedResponse: '',
        notes: '',
      });
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <h2>Track New Application</h2>
      <input
        type='text'
        name='dateApplied'
        value={newApp.dateApplied}
        onChange={handleInputChange}
        placeholder='Date Applied'
      />
      <input
        type='text'
        name='resumeVersion'
        value={newApp.resumeVersion}
        onChange={handleInputChange}
        placeholder='Resume Version'
      />
      <input
        type='text'
        name='company'
        value={newApp.company}
        onChange={handleInputChange}
        placeholder='Company Name'
      />
      <input
        type='text'
        name='companyContactInfo'
        value={newApp.companyContactInfo}
        onChange={handleInputChange}
        placeholder='Company Contact Info'
      />
      <input
        type='text'
        name='jobTitle'
        value={newApp.jobTitle}
        onChange={handleInputChange}
        placeholder='Job Title'
      />
      <input
        type='text'
        name='jobSource'
        value={newApp.jobSource}
        onChange={handleInputChange}
        placeholder='Job Source'
      />
      <input
        type='text'
        name='followedUp'
        value={newApp.followedUp}
        onChange={handleInputChange}
        placeholder='Followed Up'
      />
      <input
        type='text'
        name='followedUpDate'
        value={newApp.followedUpDate}
        onChange={handleInputChange}
        placeholder='Followed Up Date'
      />
      <input
        type='text'
        name='receivedResponse'
        value={newApp.receivedResponse}
        onChange={handleInputChange}
        placeholder='Received Response'
      />
      <input
        type='text'
        name='notes'
        value={newApp.notes}
        onChange={handleInputChange}
        placeholder='Notes'
      />
      <button onClick={handleAddApplication}>Add Application</button>
    </div>
  );
};

export default ApplicationCreator;
