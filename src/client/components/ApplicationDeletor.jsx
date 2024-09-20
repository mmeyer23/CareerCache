import React, { useState, useEffect } from 'react';

const ApplicationDeletor = ({ onDelete }) => {
  const [deleteApp, setdeleteApp] = useState({
    id: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setdeleteApp((prev) => ({ ...prev, [name]: value }));
  };

  const handleDeleteApplication = async () => {
    const { id } = deleteApp;
    if (!id) return;

    try {
      const response = await fetch(`http://localhost:3000/allapps/${id}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(deleteApp),
      });

      if (!response.ok) {
        throw new Error('Failed to delete application');
      }

      if (response.status === 204) {
        onDelete({ id });
      }
      setdeleteApp({
        id: '',
      });
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <h2>Remove An Application</h2>
      <input
        type='text'
        name='id'
        value={deleteApp.id}
        onChange={handleInputChange}
        placeholder='Input ID of Application to be Deleted'
      />
      <button onClick={handleDeleteApplication}>Remove Application</button>
    </div>
  );
};

export default ApplicationDeletor;
