import React from 'react';

const Profile = () => {
  const education = [
    {
      institution: 'University of XYZ',
      degree: 'Bachelor of Science in Computer Science',
      year: '2010 - 2014',
    },
    {
      institution: 'University of ABC',
      degree: 'Master of Business Administration',
      year: '2015 - 2017',
    },
  ];

  const experiences = [
    {
      company: 'ABC Company',
      position: 'Software Developer',
      year: '2014 - 2015',
    },
    {
      company: 'XYZ Company',
      position: 'Senior Software Developer',
      year: '2015 - 2019',
    },
    {
      company: 'PQR Company',
      position: 'Technical Lead',
      year: '2019 - present',
    },
  ];

  return (
    <div>
      <h1>Profile</h1>
      <h2>Education</h2>
      <ul>
        {education.map((edu, index) => (
          <li key={index}>
            <h3>{edu.degree}</h3>
            <p>{edu.institution}</p>
            <p>{edu.year}</p>
          </li>
        ))}
      </ul>

      <h2>Experience</h2>
      <ul>
        {experiences.map((exp, index) => (
          <li key={index}>
            <h3>{exp.position}</h3>
            <p>{exp.company}</p>
            <p>{exp.year}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Profile;
