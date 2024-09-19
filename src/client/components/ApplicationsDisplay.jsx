import React, { useState, useEffect } from 'react';
import ApplicationCreator from './ApplicationCreator';

const ApplicationsDisplay = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:3000/allapps');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const result = await response.json();
        setData(result);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const handleAddApplication = (newApp) => {
    setData((prevData) => [...prevData, newApp]);
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div>
      <h1>Applications</h1>
      <ul>
        {data.map((item) => (
          <li key={item.id}>
            {item.dateApplied}, {item.resumeVersion}, {item.company},{' '}
            {item.companyContactInfo}. {item.jobTitle}, {item.jobSource},{' '}
            {item.follwedUp}, {item.followedUpDate}, {item.receivedResponse},{' '}
            {item.notes}
          </li>
        ))}
      </ul>
      <ApplicationCreator onAdd={handleAddApplication} />
    </div>
  );
};

export default ApplicationsDisplay;
