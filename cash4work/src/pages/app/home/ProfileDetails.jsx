import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom'
import axios from 'axios';
import secrets from "../../../secret";
const api = axios.create({
  baseURL: secrets.API, 
});
import "./Profile.css"
const ProfileDetails = () => {
  const [education, setEducation] = useState([]);

    const [experiences, setExperiences] = useState([]);
    const [name, setName] = useState([]);
    const location = useLocation()

    useEffect(() => {
    	
        const { name, id } = location.state;
        console.log("location", location.state)
        setName(name);
  const fetchData = async () => {
    try {
      const educationRes = await api.get(`/profile/education/user/${id}`);
      const experienceRes = await api.get(`/profile/experience/user/${name}`);

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
  <h1 className="text-3xl font-semibold mb-5">{name}'s Profile</h1>
  <div className="flex flex-wrap gap-5">
    {/* Education section */}
    <div className="education w-full lg:w-1/2">
                  <h2 className="text-2xl font-semibold mb-4">Education</h2>
                  {
                      education.length === 0 ? (<small className="text-gray-500">No education added yet</small>) :
                      (
                          education.map((edu, index) => (
                              <div key={index} className="mb-3 bg-white p-4 rounded-lg border border-gray-300 shadow-sm">
                                  <div>
                                      <h3 className="text-xl font-semibold mb-2">{edu.institute}</h3>
                                      <p className="mb-1">{edu.degree}</p>
                                      <p className="mb-1">{edu.from_yr} - {edu.to_yr ? edu.to_yr : ""}</p>
                                  </div>
                              </div>
                          ))
                          )
                    }
</div>
    {/*
Experience section */}
<div className="experience w-full lg:w-1/2">
  <h2 className="text-2xl font-semibold mb-4">Experience</h2>
                  {
                        experiences.length === 0 ? (<small className="text-gray-500">No experience added yet</small>) :
                      (experiences.map((exp, index) => (
    <div key={index} className="mb-3 bg-white p-4 rounded-lg border border-gray-300 shadow-sm">
        <div>
          <h3 className="text-xl font-semibold mb-2">{exp.company}</h3>
          <p className="mb-1">{exp.position}</p>
            <p className="mb-1">{exp.from_yr} - {exp.to_yr ? exp.to_yr : ""}</p>
        </div>
    </div>
  )))}
</div>
</div>
</div>

);
};

export default ProfileDetails;