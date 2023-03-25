import React, { useRef, useState, useEffect } from "react"
import { useLocation } from "react-router-dom"
import JobListItem from "./jobListItem"

const API_URL = 'http://localhost:8088'; // Replace with your backend server URL

export default function JobsSidebar() {
	const { pathname } = useLocation()
	const pathReqExp = /^\/jobs\/\w{1,}$/
const [jobs, setJobs] = useState([]);
	useEffect(() => {
 	  fetch(API_URL+"/jobs")
	.then((response) => response.json())
	.then((data) => {
	  setJobs(data);
	})
	}, []);
	return (
		<div
			className={`${
				pathReqExp.test(pathname) ? "hidden" : "flex"
			} w-full bg-white border-[1px] border-r-0 border-gray-300 overflow-hidden flex-col md:rounded-tl-xl md:w-[40%] md:flex`}
		>
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
