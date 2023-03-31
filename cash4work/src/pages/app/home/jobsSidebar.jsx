import React, { useRef, useState, useEffect } from "react"
import { useLocation } from "react-router-dom"
import JobListItem from "./jobListItem"
import { moment } from 'moment'
import { useAuthContext } from "../../../context"
import secrets from "../../../secret"
//require('dotenv').config();

const API_URL = 'http://localhost:8088'; // Replace with your backend server URL
let jobList;
function JobsSidebar() {
  const { pathname } = useLocation();
  const pathReqExp = /^\/jobs\/\w{1,}$/;
  const { user } = useAuthContext();
  const allJobs = useRef();
  const [jobs, setJobs] = useState([]);

const searchJobs = (e) => {
  const searchQuery = e.target.value.toLowerCase();
  const filteredJobListings = allJobs.current.filter((job) => {
    const titleMatch = job.title.toLowerCase().includes(searchQuery);
    const locationMatch = job.location.toLowerCase().includes(searchQuery);
    const salaryMatch = job.salary
      ? job.salary.toString().toLowerCase().includes(searchQuery)
      : false;

    return titleMatch || locationMatch || salaryMatch;
  });
  console.log("filtered Jobs", filteredJobListings);
  setJobs(filteredJobListings);
};


  useEffect(() => {
  const fetchJobs = async () => {
    try {
      const initialJobsResponse = await fetch(secrets.API_2 + "/jobs");
      const initialJobs = await initialJobsResponse.json();

      const appliedJobsResponse = await fetch(
        secrets.API_2 + "/jobs/applied/" + user.id
      );
      const appliedJobs = await appliedJobsResponse.json();

      const filteredJobListings = initialJobs.filter((initialJob) => {
        return !appliedJobs.some(
          (appliedJob) => appliedJob.job_id === initialJob.id
        );
      });
      allJobs.current = filteredJobListings;

      setJobs(filteredJobListings);
    } catch (error) {
      console.error("Error fetching jobs:", error);
    }
  };

  fetchJobs();
}, []);


  return (
    <div className={`${pathReqExp.test(pathname) ? "hidden" : "flex"} w-full bg-white border-[1px] border-r-0 border-gray-300 overflow-hidden flex-col md:rounded-tl-xl md:w-[40%] md:flex`}>
      <input
        className="border-[1.2px] border-gray-400 rounded-md py-[6px] px-2 mt-1 mb-4"
        type="text"
        onChange={searchJobs}
        placeholder="Search jobs"
      />
      <div className="bg-primary text-white p-3">
        <h2 className="text-base">Jobs based on your profile</h2>
        <p className="text-[12px]">{jobs.length} results</p>
      </div>
      <div className="h-full overflow-y-scroll flex-1">
        {jobs.map((job) => (
          <JobListItem key={job.id} data={job} />
        ))}
      </div>
    </div>
  )
}

export default JobsSidebar;
export {jobList};
