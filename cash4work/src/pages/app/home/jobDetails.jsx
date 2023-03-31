import React, { useEffect } from "react"
import { FaBriefcase } from "react-icons/fa"
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

	}

	return (
		<div className="w-[100%] py-3 px-8 bg-white overflow-y-auto border-[1px] border-gray-300 border-l-0 md:rounded-tr-xl md:w-[60%]">
			<button onClick={() => navigate("/jobs")} className="md:hidden">
				<MdOutlineKeyboardBackspace size={30} className="opacity-60" />
			</button>

			<h1 className="text-2xl font-semibold mt-3">{data?.title}</h1>
			<p className="mt-4">
				• {data?.location}{" • "}
				<span className="opacity-60">Posted on: {moment(data?.post_date).format('YYYY-MM-DD')}</span>
				{" • "}
				Salary ${data?.salary}
				{" • "}
			</p>

			<div className="mt-4 flex items-center gap-3 opacity-60">
				<FaBriefcase size={20} />
				<div>
					<span>Needed on</span>
					{" • "}
					<span>{moment(data?.need_on).format('YYYY-MM-DD hh:mm')}</span>
				</div>
			</div>
			<p className="mt-6">{data?.description}</p>
{/* 
			<div className="mt-4">
				<span className="font-semibold">Job Responsiblities</span>
				<ul className="list-disc ml-10 mt-4">
					{data?.jobResponsibilities.map((responsiblity, _) => (
						<li key={_}>{responsiblity}</li>
					))}
				</ul>
			</div>

			<div className="mt-4">
				<span className="font-semibold">Job Requirements</span>
				<ul className="list-disc ml-10 mt-4">
					{data?.jobRequirements.map((requirement, _) => (
						<li key={_}>{requirement}</li>
					))}
				</ul>
			</div>
 */}
			<div className="flex items-center gap-2 mt-8 justify-end">
			<button onClick={() => applyJob()} className="bg-primary rounded-full text-white text-base font-semibold px-6 py-2 hover:opacity-80">
				Apply
			</button>

			<button onClick={() => saveJob(data)} className="bg-white border-[1px] border-primary rounded-full text-primary text-base font-semibold px-6 py-2 hover:opacity-80">
					Save
			</button>

			</div>
		</div>
	)
}
