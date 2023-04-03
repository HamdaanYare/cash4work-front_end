import React, { useState, useEffect } from 'react';
import { AiFillEdit, AiFillDelete, AiFillPlusCircle } from 'react-icons/ai';
import { TiTick, TiCancel } from 'react-icons/ti';
import axios from 'axios';
import secrets from "../../../secret";
import { useAuthContext } from '../../../context';
const api = axios.create({
  baseURL: secrets.API, 
});
import "./Profile.css"
const Profile = () => {
  const { user } = useAuthContext();
  const [education, setEducation] = useState([]);

  const [experiences, setExperiences] = useState([]);

  const [newEducation, setNewEducation] = useState({
    institute: '',
    degree: '',
    from_yr: '',
    to_yr: '',
  });

  const [newExperience, setNewExperience] = useState({
    company: '',
    position: '',
    from_yr: '',
    to_yr: '',
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

const addEducation = async () => {
  try {
    const response = await api.post('/profile/education', {
      user_id: user.id,
      ...newEducation,
    });
    setEducation([...education, {...newEducation, id: response.data.id}]);
    setNewEducation({ institute: '', degree: '', year: '', from_yr: '', to_yr: '' });
  } catch (error) {
    console.error('Error adding education', error);
  }
};

  const addExperience = async () => {
    try {
    const response = await api.post('/profile/experience', {
      user_id: user.id,
      ...newExperience,
    });
    setExperiences([...experiences, {...newExperience, id: response.data.id}]);
      setNewExperience({ company: '', position: '', year: '', from_yr: '', to_yr: '' });
       } catch (error) {
    console.error('Error adding experience', error);
  }
  };

  const editEducation = (index) => {

    setEditEducationIndex(index);
    setNewEducation({
      institute: education[index].institute,
      degree: education[index].degree,
      from_yr: education[index].from_yr,
      to_yr: education[index].to_yr,
    });
  };

  const editExperience = (index) => {
    setEditExperienceIndex(index);
    setNewExperience({
      company: experiences[index].company,
      position: experiences[index].position,
      from_yr: experiences[index].from_yr,
      to_yr: experiences[index].to_yr,
    });
  };

  const updateEducation = () => {
    console.log('education', education[editEducationIndex]);
    const response = api.put('/profile/education/'+education[editEducationIndex].id, {
      user_id: user.id,
      ...newEducation,
    });
    const newEducationList = [...education];
    newEducationList[editEducationIndex] = newEducation;
    setEducation(newEducationList);
    setEditEducationIndex(-1);
    setNewEducation({ institute: '', degree: '', year: '', from_yr: '', to_yr: '' });
  };

  const updateExperience = () => {
    const response = api.put('/profile/experience/' + experiences[editExperienceIndex].id, {
      user_id: user.id,
      ...newExperience,
    });
    const newExperienceList = [...experiences];
    newExperienceList[editExperienceIndex] = newExperience;
    setExperiences(newExperienceList);
    setEditExperienceIndex(-1);
    setNewExperience({ company: '', position: '', from_yr: '', to_yr: '' });
  };

  const deleteEducation = (index) => {
    const response = api.delete('/profile/education/' + education[index].id);
    const newEducationList = [...education];
    newEducationList.splice(index, 1);
    setEducation(newEducationList);
  };

  const deleteExperience = (index) => {
    const response = api.delete('/profile/experience/' + experiences[index].id);
    const newExperienceList = [...experiences];
    newExperienceList.splice(index, 1);
    setExperiences(newExperienceList);
  };

useEffect(() => {
  const fetchData = async () => {
    try {
      const userId = user.id;
      const educationRes = await api.get(`/profile/education/user/${userId}`);
      const experienceRes = await api.get(`/profile/experience/user/${userId}`);

      setEducation(educationRes.data);
      setExperiences(experienceRes.data);
    } catch (error) {
      console.error('Error fetching data', error);
    }
  };

  fetchData();
}, []);


  return (
<div className="profile bg-white p-5 rounded-xl shadow-md">
  <h1 className="text-3xl font-semibold mb-5">My Profile</h1>
  <div className="flex flex-wrap gap-5">
    {/* Education section */}
    <div className="education w-full lg:w-1/2">
      <h2 className="text-2xl font-semibold mb-4">Education</h2>
      {education.map((edu, index) => (
        <div key={index} className="mb-3 bg-white p-4 rounded-lg border border-gray-300 shadow-sm">
          {editEducationIndex === index ? (
            <div>
              <input
                type="text"
                name="institute"
                className="w-full px-4 py-2 mb-2 border border-gray-300 rounded-md"
                value={newEducation.institute}
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
                type="number"
                name="from_yr"
                className="form-control mb-2"
                value={newEducation.from_yr}
                onChange={handleEducationChange}
              />
              <input
                type="number"
                name="to_yr"
                className="form-control mb-2"
                value={newEducation.to_yr}
                onChange={handleEducationChange}
              />
              <div className="text-right mt-3">
                <button className="bg-blue-500 text-white py-1 px-3 mr-2 rounded-md" onClick={updateEducation}>
                  <TiTick />
                </button>
                <button className="bg-red-500 text-white py-1 px-3 rounded-md" onClick={() => { setEditEducationIndex(-1); setNewEducation({ institute: '', degree: '', year: '', from_yr: '', to_yr: '' });}}>
                  <TiCancel />
                </button>
              </div>
            </div>
          ) : (
            <div>
              <h3 className="text-xl font-semibold mb-2">{edu.institute}</h3>
              <p className="mb-1">{edu.degree}</p>
                <p className="mb-1">{edu.from_yr} - { edu.to_yr ? edu.to_yr : ""}</p>
              <div className="text-right mt-3">
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
          {editEducationIndex === -1 ? (
      <div className="bg-white p-4 rounded-lg border border-gray-300 shadow-sm mt-4">
        <input
          type="text"
          name="institute"
          className="form-control mb-2"
          placeholder="Institution"
          value={newEducation.institute}
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
          type="number"
          name="from_yr"
          className="form-control mb-2"
          placeholder="From"
          value={newEducation.from_yr}
          onChange={handleEducationChange}
            />
            <input
          type="number"
          name="to_yr"
          className="form-control mb-2"
          placeholder="To"
          value={newEducation.to_yr}
          onChange={handleEducationChange}
        />
        <div className="text-right mt-3">
          <button className="bg-blue-500 text-white py-1 px-3 mr-2 rounded-md" onClick={addEducation}>
            <AiFillPlusCircle />
          </button>
        </div>
            </div>
          ) : null}
    </div>

    {/*
Experience section */}
<div className="experience w-full lg:w-1/2">
  <h2 className="text-2xl font-semibold mb-4">Experience</h2>
  {experiences.map((exp, index) => (
    <div key={index} className="mb-3 bg-white p-4 rounded-lg border border-gray-300 shadow-sm">
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
            type="number"
            name="from_yr"
            className="form-control mb-2"
            value={newExperience.from_yr}
            onChange={handleExperienceChange}
          />
          <input
            type="number"
            name="to_yr"
            className="form-control mb-2"
            value={newExperience.to_yr}
            onChange={handleExperienceChange}
          />
          <div className="text-right mt-3">
            <button className="bg-blue-500 text-white py-1 px-3 mr-2 rounded-md" onClick={updateExperience}>
              <TiTick />
            </button>
            <button className="bg-red-500 text-white py-1 px-3 rounded-md" onClick={() => { setEditExperienceIndex(-1);     setNewExperience({ company: '', position: '', from_yr: '', to_yr: '' });
 }}>
              <TiCancel />
            </button>
          </div>
        </div>
      ) : (
        <div>
          <h3 className="text-xl font-semibold mb-2">{exp.company}</h3>
          <p className="mb-1">{exp.position}</p>
            <p className="mb-1">{exp.from_yr} - {exp.to_yr ? exp.to_yr : ""}</p>
          <div className="text-right mt-3">
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
          {editExperienceIndex === -1 ? (
  <div className="bg-white p-4 rounded-lg border border-gray-300 shadow-sm mt-4">
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
      type="number"
      name="from_yr"
      className="form-control mb-2"
      placeholder="From"
      value={newExperience.from_yr}
      onChange={handleExperienceChange}
            />
            <input
      type="number"
      name="to_yr"
      className="form-control mb-2"
      placeholder="To"
      value={newExperience.to_yr}
      onChange={handleExperienceChange}
    />
    <div className="text-right mt-3">
      <button className="bg-blue-500 text-white py-1 px-3 mr-2 rounded-md" onClick={addExperience}>
        <AiFillPlusCircle />
      </button>
    </div>
            </div>
          ) : null}
</div>
</div>
</div>

);
};

export default Profile