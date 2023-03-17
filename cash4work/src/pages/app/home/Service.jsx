import React from 'react';

const Service = () => {
  const handleCreateResume = () => {
    // Code to handle creating a resume
    console.log('Create Resume button clicked!');
    const API_URL = "https://cash4-work-backend.vercel.app";

  }
  const handleCreateAd = () => {
    // Code to handle creating a resume
    console.log('Create Ad button clicked!');
    const API_URL = "https://cash4-work-backend.vercel.app";

  }
  const postJob = () => {
    // Code to handle creating a resume
    console.log('Post Job button clicked!');
    const API_URL = "https://cash4-work-backend.vercel.app";

  }
  const ApplyJobs = () => {
    // Code to handle creating a resume
    console.log('Apply Jobs button clicked!');
    const API_URL = "https://cash4-work-backend.vercel.app";

  }

  return (
    <div style={styles.serviceContainer}>
      <h1 style={styles.heading}>Our Services</h1>
      <div style={styles.serviceCard}>
        <h2 style={styles.subheading}>Service 1</h2>
        <button onClick={handleCreateResume} style={styles.button}>Create Resume</button>
      </div>
      <div style={styles.serviceCard}>
        <h2 style={styles.subheading}>Service 2</h2>
        <button onClick={handleCreateAd} style={styles.button}>Create Ad</button>
      </div>
      <div style={styles.serviceCard}>
        <h2 style={styles.subheading}>Service 3</h2>
        <button onClick={postJob} style={styles.button}>Post Job</button>
      </div>
      <div style={styles.serviceCard}>
        <h2 style={styles.subheading}>Service 4</h2>
        <button onClick={ApplyJobs} style={styles.button}>Apply jobs</button>
      </div>
    </div>
  );
};

const styles = {
  serviceContainer: {
    maxWidth: '800px',
    margin: '0 auto',
    padding: '50px 20px',
    textAlign: 'center',
  },
  heading: {
    fontSize: '36px',
    fontWeight: 'bold',
    marginBottom: '50px',
    backgroundColor: 'lighblue',
    color: 'black'
  },
  serviceCard: {
    marginTop: '50px',
    padding: '20px',
    backgroundColor: '#f7f7f7',
    borderRadius: '5px',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
    color: 'blue'
  },
  subheading: {
    fontSize: '24px',
    marginBottom: '10px'
  },
  text: {
    fontSize: '16px',
    lineHeight: '1.5',
    fontWeight: 'larger'
  }
};

export default Service;
