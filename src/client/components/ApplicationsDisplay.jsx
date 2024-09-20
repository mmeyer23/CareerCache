import React, { useState, useEffect } from 'react';
import ApplicationCreator from './ApplicationCreator';
import ApplicationDeletor from './ApplicationDeletor';

const ApplicationsDisplay = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:3000/allapps');
        if (!response.ok) {
          throw new Error('Issue with network response');
        }
        const result = await response.json();
        const transformedData = result.map((app) => ({
          ...app,
          _id: app._id.toString(),
        }));
        setData(transformedData);
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

  const handleDeleteApplication = (deletedApp) => {
    const idToRemove = deletedApp.id;
    setData((prevData) => prevData.filter((app) => app._id !== idToRemove));
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
          <li key={item._id} className='eachApp'>
            {item._id} -- {item.dateApplied} -- {item.resumeVersion} --{' '}
            {item.company} --
            {item.companyContactInfo} -- {item.jobTitle} -- {item.jobSource} --
            {item.followedUp} -- {item.followedUpDate} --{' '}
            {item.receivedResponse} --
            {item.notes}
          </li>
        ))}
      </ul>
      <ApplicationCreator onAdd={handleAddApplication} />
      <ApplicationDeletor onDelete={handleDeleteApplication} />
    </div>
  );
};

export default ApplicationsDisplay;
