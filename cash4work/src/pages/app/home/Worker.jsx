import React from 'react';
import './Worker.css';

const Worker = () => {
  const worker = {
    name: 'Mohamed Haadii',
    occupation: 'Web Developer',
    email: 'mohamed@gmail.com',
    phone: '555-555-5555',
    location: 'New York, NY',
  };

  return (
    <div className="worker">
      <h1 className="title">Worker Page</h1>
      <p className="description">This is the Worker page.</p>
      <div className="user-info">
        <h2>{worker.name}</h2>
        <p>{worker.occupation}</p>
        <p>{worker.email}</p>
        <p>{worker.phone}</p>
        <p>{worker.location}</p>
      </div>
    </div>
  );
};

export default Worker;
