import React, { useEffect } from "react"
import { FaBriefcase } from "react-icons/fa"
import { MdOutlineKeyboardBackspace } from "react-icons/md"
import { useLocation, useNavigate } from "react-router-dom"

export default function JobDetails() {
	const { state } = useLocation()
	const navigate = useNavigate()
	const data = state?.data

	useEffect(() => {
		if (!data) navigate("/jobs")
	}, [])

	return (
		<div className="w-[100%] py-3 px-8 bg-white overflow-y-auto border-[1px] border-gray-300 border-l-0 md:rounded-tr-xl md:w-[60%]">
			<button onClick={() => navigate("/jobs")} className="md:hidden">
				<MdOutlineKeyboardBackspace size={30} className="opacity-60" />
			</button>

			<h1 className="text-2xl font-semibold mt-3">{data?.title}</h1>
			<p className="mt-4">
				{data?.organization} • {data?.location}{" "}
				<span className="opacity-60">{data?.datePosted}</span>
				{" • "}
				<span className="opacity-60">
					{data?.numberOfApplicants} applicants
				</span>
			</p>

			<div className="mt-4 flex items-center gap-3 opacity-60">
				<FaBriefcase size={20} />
				<div>
					<span>Full-time</span>
					{" • "}
					<span>Entry level</span>
				</div>
			</div>

			<p className="mt-6">{data?.description}</p>

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

			<div className="flex items-center gap-2 mt-8 justify-end">
				<button className="bg-primary rounded-full text-white text-base font-semibold px-6 py-2 hover:opacity-80">
					Apply
				</button>
				<button className="bg-white border-[1px] border-primary rounded-full text-primary text-base font-semibold px-6 py-2 hover:opacity-80">
					Save
				</button>
			</div>
		</div>
	)
}
