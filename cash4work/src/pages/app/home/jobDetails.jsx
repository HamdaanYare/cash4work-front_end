import React, { useEffect } from "react"
import { FaBriefcase, FaMapMarkerAlt, FaCalendarAlt, FaDollarSign } from "react-icons/fa"
import { MdOutlineKeyboardBackspace } from "react-icons/md"
import { useLocation, useNavigate } from "react-router-dom"
import moment from "moment"
import { useAuthContext } from "../../../context"
import secrets from "../../../secret"

export default function JobDetails() {
	//const API_URL = 'http://localhost:8088'; // Replace with your backend server URL
	const { user } = useAuthContext()
	const { state } = useLocation()
	const navigate = useNavigate()
	const data = state?.data
	console.log(data)
	useEffect(() => {
		if (!data) navigate("/jobs")
	}, [])

	function applyJob() {
		
		fetch(secrets.API_2+"/jobs/apply", {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify( {job_id: data.id, applied_by: user.id} ),
		});
		alert("Job Applied");
		navigate("/jobs")
    window.location.reload();
	}

	return (
<div className="w-full py-6 px-8 bg-white overflow-y-auto border border-gray-300 border-l-0 md:rounded-tr-xl md:w-3/5">
  <button onClick={() => navigate("/jobs")} className="md:hidden">
    <MdOutlineKeyboardBackspace size={30} className="text-opacity-60" />
  </button>

  <h1 className="text-3xl font-semibold mb-6">{data?.title}</h1>

  <div className="relative mb-10">
    <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-blue-500 via-primary to-blue-600 rounded-lg"></div>
    <div className="relative p-4">
      <div className="grid grid-cols-2 gap-4 text-white">
        <div className="flex items-center">
          <FaMapMarkerAlt size={18} />
          <span className="ml-2">{data?.location}</span>
        </div>
        <div className="flex items-center">
          <FaCalendarAlt size={18} />
          <span className="ml-2">{moment(data?.post_date).format('YYYY-MM-DD')}</span>
        </div>
        <div className="flex items-center">
          <FaBriefcase size={18} />
          <div className="ml-2">
            <span>Needed on</span>
            <span className="mx-1">•</span>
            <span>{moment(data?.need_on).format('YYYY-MM-DD hh:mm')}</span>
          </div>
        </div>
        <div className="flex items-center">
          <FaDollarSign size={18} />
          <span className="ml-2">Salary ${data?.salary}</span>
        </div>
      </div>
    </div>
  </div>

  <p className="mt-2 text-base mb-8">{data?.description}</p>
  <div className="flex items-center gap-4 mt-4 justify-end">
    <button onClick={() => applyJob()} className="bg-primary hover:bg-primary-dark text-white text-base font-semibold px-6 py-2 rounded-lg shadow-md transition-colors duration-300">
      Apply
    </button>

    {/* <button onClick={() => saveJob(data)} className="bg-white border border-primary hover:border-primary-dark text-primary text-base font-semibold px-6 py-2 rounded-lg shadow-md transition-colors duration-300">
      Save
    </button> */}
  </div>
</div>

	)
}
