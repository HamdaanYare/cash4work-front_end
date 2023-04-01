import React, { useState, useEffect } from 'react';
import secrets from '../../../secret';
import { useAuthContext } from '../../../context';

const AppliedJobs = () => {
  const [jobs, setJobs] = useState([]);
  const { user } = useAuthContext();

  useEffect(() => {
    // Code to fetch applied jobs from API
    const fetchJobs = async () => {
      try {
        const initialJobsResponse = await fetch(secrets.API_2 + "/jobs");
        const initialJobs = await initialJobsResponse.json();
  
        const appliedJobsResponse = await fetch(
          secrets.API_2 + "/jobs/applied/" + user.id
        );
        const appliedJobs = await appliedJobsResponse.json();
  
        const filteredJobListings = initialJobs.filter((initialJob) => {
          return appliedJobs.some(
            (appliedJob) => appliedJob.job_id === initialJob.id
          );
        });
  
        setJobs(filteredJobListings);
      } catch (error) {
        console.error("Error fetching jobs:", error);
      }
    };
  
    fetchJobs();
  }, []);

  return (
<div className="bg-gray-100 min-h-screen">
  <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
    <div className="px-4 py-6 sm:px-0">
      <h1 className="text-3xl font-semibold text-gray-900 mb-6">Applied Jobs</h1>
      {jobs.length === 0 && (
        <p className="text-lg text-gray-600">No applied jobs found.</p>
      )}
      {jobs.map(job => (
        <div
          key={job.id}
          className="bg-white shadow rounded-lg p-6 mb-6 border border-gray-200"
        >
          <h2 className="text-2xl font-semibold text-gray-800 mb-2">
            {job.title}
          </h2>
          <p className="text-lg text-gray-600 mb-2">{job.location}</p>
          <p className="text-gray-500">{job.description}</p>
        </div>
      ))}
    </div>
  </div>
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
