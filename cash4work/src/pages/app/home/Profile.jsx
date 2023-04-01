import React, { useState } from 'react';
import { AiFillEdit, AiFillDelete, AiFillPlusCircle } from 'react-icons/ai';
import { TiTick, TiCancel } from 'react-icons/ti';
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
  <h1 className="text-3xl font-semibold mb-5">My Profile</h1>
  <div className="flex flex-wrap gap-5">
    {/* Education section */}
    <div className="education w-full lg:w-1/2">
      <h2 className="text-2xl font-semibold mb-4">Education</h2>
      {education.map((edu, index) => (
        <div key={index} className="mb-3">
          {editEducationIndex === index ? (
            <div>
              <input
                type="text"
                name="institution"
                className="w-full px-4 py-2 mb-2 border border-gray-300 rounded-md"
                value={newEducation.institution}
                onChange={handleEducationChange}
              />
               <input
                        type="text"
                        name="degree"
                        className="form-control mb-2"
                        value={newEducation.degree}
                        onChange={handleEducationChange}
                      />
                      <input
                        type="text"
                        name="year"
                        className="form-control mb-2"
                        value={newEducation.year}
                        onChange={handleEducationChange}
                      />
                      <div className="card-footer text-right">
                      <button className="bg-blue-500 text-white py-1 px-3 mr-2 rounded-md" onClick={updateEducation}> <TiTick/> </button>
                      <button className="bg-red-500 text-white py-1 px-3 rounded-md" onClick={() => setEditEducationIndex(-1)}> <TiCancel/> </button>
                      </div>
            </div>
          ) : (
            <div>
              <h3 className="text-xl font-semibold mb-2">{edu.institution}</h3>
              <p className="mb-1">{edu.degree}</p>
              <p className="mb-1">{edu.year}</p>
              <div className="card-footer text-right">
              <button className="bg-blue-500 text-white py-1 px-3 mr-2 rounded-md" onClick={() => editEducation(index)}>
                <AiFillEdit />
              </button>
              <button className="bg-red-500 text-white py-1 px-3 rounded-md" onClick={() => deleteEducation(index)}>
                <AiFillDelete />
              </button>

              </div>
            </div>
          )}
        </div>
      ))}
      <div>
      <input
                  type="text"
                  name="institution"
                  className="form-control mb-2"
                  placeholder="Institution"
                  value={newEducation.institution}
                  onChange={handleEducationChange}
                />
                <input
                  type="text"
                  name="degree"
                  className="form-control mb-2"
                  placeholder="Degree"
                  value={newEducation.degree}
                  onChange={handleEducationChange}
                />
                <input
                  type="text"
                  name="year"
                  className="form-control mb-2"
                  placeholder="Year"
                  value={newEducation.year}
                  onChange={handleEducationChange}
                />
      </div>
      <div className="card-footer text-right">
              <button className="bg-blue-500 text-white py-1 px-3 mr-2 rounded-md" onClick={addEducation}><AiFillPlusCircle/></button>
      </div>
    </div>

    {/* Experience section */}
    <div className="experience w-full lg:w-1/2">
      <h2 className="text-2xl font-semibold mb-4">Experience</h2>
      {experiences.map((exp, index) => (
        <div key={index} className="mb-3">
          {editExperienceIndex === index ? (
            <div>
              <input
                type="text"
                name="company"
                className="w-full px-4 py-2 mb-2 border border-gray-300 rounded-md"
                value={newExperience.company}
                onChange={handleExperienceChange}
              />
              <input
              type="text"
              name="position"
              className="form-control mb-2"
              value={newExperience.position}
              onChange={handleExperienceChange}
            />
            <input
              type="text"
              name="year"
              className="form-control mb-2"
              value={newExperience.year}
              onChange={handleExperienceChange}
            />
            <div className="card-footer text-right">
            <button className="bg-blue-500 text-white py-1 px-3 mr-2 rounded-md" onClick={updateExperience}> <TiTick/> </button>
            <button className="bg-red-500 text-white py-1 px-3 rounded-md" onClick={() => setEditExperienceIndex(-1)}> <TiCancel/> </button>
            </div>
            </div>
          ) : (
            <div>
              <h3 className="text-xl font-semibold mb-2">{exp.company}</h3>
              <p className="mb-1">{exp.position}</p>
              <p className="mb-1">{exp.year}</p>
              <div className="card-footer text-right">
              <button className="bg-blue-500 text-white py-1 px-3 mr-2 rounded-md" onClick={() => editExperience(index)}>
                <AiFillEdit />
              </button>
              <button className="bg-red-500 text-white py-1 px-3 rounded-md" onClick={() => deleteExperience(index)}>
                <AiFillDelete />
              </button>
            </div>
            </div>
          )}
        </div>
      ))}
      <div>
      <input
        type="text"
        name="company"
        className="form-control mb-2"
        placeholder="Company"
        value={newExperience.company}
        onChange={handleExperienceChange}
      />
      <input
        type="text"
        name="position"
        className="form-control mb-2"
        placeholder="Position"
        value={newExperience.position}
        onChange={handleExperienceChange}
      />
      <input
        type="text"
        name="year"
        className="form-control mb-2"
        placeholder="Year"
        value={newExperience.year}
        onChange={handleExperienceChange}
      />
      </div>
      <div className="card-footer text-right">
    <button className="bg-blue-500 text-white py-1 px-3 mr-2 rounded-md" onClick={addExperience}> <AiFillPlusCircle/> </button>
  </div>
    </div>
  </div>
</div>

);
};

export default Profile