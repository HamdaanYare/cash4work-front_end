// import React from 'react';

// const Profile = () => {
//   const education = [
//     {
//       institution: 'University of XYZ',
//       degree: 'Bachelor of Science in Computer Science',
//       year: '2010 - 2014',
//     },
//     {
//       institution: 'University of ABC',
//       degree: 'Master of Business Administration',
//       year: '2015 - 2017',
//     },
//   ];

//   const experiences = [
//     {
//       company: 'ABC Company',
//       position: 'Software Developer',
//       year: '2014 - 2015',
//     },
//     {
//       company: 'XYZ Company',
//       position: 'Senior Software Developer',
//       year: '2015 - 2019',
//     },
//     {
//       company: 'PQR Company',
//       position: 'Technical Lead',
//       year: '2019 - present',
//     },
//   ];

//   return (
//     <div>
//       <h1>Profile</h1>
//       <h2>Education</h2>
//       <ul>
//         {education.map((edu, index) => (
//           <li key={index}>
//             <h3>{edu.degree}</h3>
//             <p>{edu.institution}</p>
//             <p>{edu.year}</p>
//           </li>
//         ))}
//       </ul>

//       <h2>Experience</h2>
//       <ul>
//         {experiences.map((exp, index) => (
//           <li key={index}>
//             <h3>{exp.position}</h3>
//             <p>{exp.company}</p>
//             <p>{exp.year}</p>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default Profile;

import React, { useState } from 'react';
import "./Profile.css"

const Profile = () => {
  const [education, setEducation] = useState([
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
  ]);

  const [experiences, setExperiences] = useState([
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
  ]);

  const [newEducation, setNewEducation] = useState({
    institution: '',
    degree: '',
    year: '',
  });

  const [newExperience, setNewExperience] = useState({
    company: '',
    position: '',
    year: '',
  });

  const [editEducationIndex, setEditEducationIndex] = useState(-1);
  const [editExperienceIndex, setEditExperienceIndex] = useState(-1);

  const handleEducationChange = (event) => {
    setNewEducation({
      ...newEducation,
      [event.target.name]: event.target.value,
    });
  };

  const handleExperienceChange = (event) => {
    setNewExperience({
      ...newExperience,
      [event.target.name]: event.target.value,
    });
  };

  const addEducation = () => {
    setEducation([...education, newEducation]);
    setNewEducation({ institution: '', degree: '', year: '' });
  };

  const addExperience = () => {
    setExperiences([...experiences, newExperience]);
    setNewExperience({ company: '', position: '', year: '' });
  };

  const editEducation = (index) => {
    setEditEducationIndex(index);
    setNewEducation({
      institution: education[index].institution,
      degree: education[index].degree,
      year: education[index].year,
    });
  };

  const editExperience = (index) => {
    setEditExperienceIndex(index);
    setNewExperience({
      company: experiences[index].company,
      position: experiences[index].position,
      year: experiences[index].year,
    });
  };

  const updateEducation = () => {
    const newEducationList = [...education];
    newEducationList[editEducationIndex] = newEducation;
    setEducation(newEducationList);
    setEditEducationIndex(-1);
    setNewEducation({ institution: '', degree: '', year: '' });
  };

  const updateExperience = () => {
    const newExperienceList = [...experiences];
    newExperienceList[editExperienceIndex] = newExperience;
    setExperiences(newExperienceList);
    setEditExperienceIndex(-1);
    setNewExperience({ company: '', position: '', year: '' });
  };

  const deleteEducation = (index) => {
    const newEducationList = [...education];
    newEducationList.splice(index, 1);
    setEducation(newEducationList);
  };

  const deleteExperience = (index) => {
    const newExperienceList = [...experiences];
    newExperienceList.splice(index, 1);
    setExperiences(newExperienceList);
  };

  return (
    <div className="profile">
      <h1>My Profile</h1>
  <div className="education">
    <h2>Education</h2>
    {education.map((edu, index) => (
      <div key={index}>
        {editEducationIndex === index ? (
          <div>
            <input
              type="text"
              name="institution"
              value={newEducation.institution}
              onChange={handleEducationChange}
            />
            <input
              type="text"
              name="degree"
              value={newEducation.degree}
              onChange={handleEducationChange}
            />
            <input
              type="text"
              name="year"
              value={newEducation.year}
              onChange={handleEducationChange}
            />
            <button onClick={updateEducation}>Save</button>
            <button onClick={() => setEditEducationIndex(-1)}>Cancel</button>
          </div>
        ) : (
          <div>
            <h3>{edu.institution}</h3>
            <p>{edu.degree}</p>
            <p>{edu.year}</p>
            <button onClick={() => editEducation(index)}>Edit</button>
            <button onClick={() => deleteEducation(index)}>Delete</button>
          </div>
        )}
      </div>
    ))}
    <div>
      <input
        type="text"
        name="institution"
        placeholder="Institution"
        value={newEducation.institution}
        onChange={handleEducationChange}
      />
      <input
        type="text"
        name="degree"
        placeholder="Degree"
        value={newEducation.degree}
        onChange={handleEducationChange}
      />
      <input
        type="text"
        name="year"
        placeholder="Year"
        value={newEducation.year}
        onChange={handleEducationChange}
      />
      <button onClick={addEducation}>Add</button>
    </div>
  </div>
  <div className="experience">
    <h2>Experience</h2>
    {experiences.map((exp, index) => (
      <div key={index}>
        {editExperienceIndex === index ? (
          <div>
            <input
              type="text"
              name="company"
              value={newExperience.company}
              onChange={handleExperienceChange}
            />
            <input
              type="text"
              name="position"
              value={newExperience.position}
              onChange={handleExperienceChange}
            />
            <input
              type="text"
              name="year"
              value={newExperience.year}
              onChange={handleExperienceChange}
            />
            <button onClick={updateExperience}>Save</button>
            <button onClick={() => setEditExperienceIndex(-1)}>Cancel</button>
          </div>
        ) : (
          <div>
            <h3>{exp.company}</h3>
            <p>{exp.position}</p>
            <p>{exp.year}</p>
            <button onClick={() => editExperience(index)}>Edit</button>
            <button onClick={() => deleteExperience(index)}>Delete</button>
          </div>
        )}
      </div>
    ))}
    <div>
      <input
        type="text"
        name="company"
        placeholder="Company"
        value={newExperience.company}
        onChange={handleExperienceChange}
      />
      <input
        type="text"
        name="position"
        placeholder="Position"
        value={newExperience.position}
        onChange={handleExperienceChange}
      />
      <input
        type="text"
        name="year"
        placeholder="Year"
        value={newExperience.year}
        onChange={handleExperienceChange}
      />
      <button onClick={addExperience}>Add</button>
    </div>
  </div>
</div>
);
};

export default Profile