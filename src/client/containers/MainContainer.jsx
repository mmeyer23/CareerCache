import React from 'react';
import { useSelector } from 'react-redux';

import ApplicationsDisplay from '../components/ApplicationsDisplay';

const MainContainer = () => {
  return (
    <div className='container'>
      <ApplicationsDisplay />
    </div>
  );
};

export default MainContainer;
