import React, { useState, useEffect } from 'react';

const AppliedJobs = () => {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    // Code to fetch applied jobs from API
    const API_URL = "https://cash4-work-backend.vercel.app";
    fetch(`${API_URL}/applied-jobs`)
      .then(response => response.json())
      .then(data => setJobs(data))
      .catch(error => console.log(error));
  }, []);

  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>Applied Jobs</h1>
      {jobs.length === 0 && <p>No applied jobs found.</p>}
      {jobs.map(job => (
        <div key={job.id} style={styles.job}>
          <h2>{job.title}</h2>
          <p>{job.company}</p>
          <p>{job.description}</p>
        </div>
      ))}
    </div>
  );
};

const styles = {
  container: {
    maxWidth: '800px',
    margin: '0 auto',
    padding: '50px 20px',
    textAlign: 'center',
  },
  heading: {
    fontSize: '36px',
    fontWeight: 'bold',
    marginBottom: '50px'
  },
  job: {
    marginTop: '50px',
    padding: '20px',
    backgroundColor: '#f7f7f7',
    borderRadius: '5px',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
    color: 'blue'
  },
};

export default AppliedJobs;
