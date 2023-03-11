import React from 'react';

const Service = () => {
  return (
    <div style={styles.serviceContainer}>
      <h1 style={styles.heading}>Our Services</h1>
      <div style={styles.serviceCard}>
        <h2 style={styles.subheading}>Service 1</h2>
        <p style={styles.text}>Create Resume</p>
      </div>
      <div style={styles.serviceCard}>
        <h2 style={styles.subheading}>Service 2</h2>
        <p style={styles.text}>Create Ad</p>
      </div>
      <div style={styles.serviceCard}>
        <h2 style={styles.subheading}>Service 3</h2>
        <p style={styles.text}>Post Job</p>
      </div>
      <div style={styles.serviceCard}>
        <h2 style={styles.subheading}>Service 4</h2>
        <p style={styles.text}>Apply jobs</p>
      </div>
    </div>
  );
};

const styles = {
  serviceContainer: {
    maxWidth: '800px',
    margin: '0 auto',
    padding: '50px 20px',
    textAlign: 'center'
  },
  heading: {
    fontSize: '36px',
    fontWeight: 'bold',
    marginBottom: '50px'
  },
  serviceCard: {
    marginTop: '50px',
    padding: '20px',
    backgroundColor: '#f7f7f7',
    borderRadius: '5px',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)'
  },
  subheading: {
    fontSize: '24px',
    marginBottom: '10px'
  },
  text: {
    fontSize: '16px',
    lineHeight: '1.5'
  }
};

export default Service;
