import React from "react"
import { BsBuilding } from "react-icons/bs"
import { useLocation, useNavigate } from "react-router-dom"

export default function JobListItem({ data }) {
	const navigate = useNavigate()
	const { pathname } = useLocation()

	const handleClick = () => navigate(`${data.id}`, { state: { data } })

	return (
		<div
			onClick={handleClick}
			className={`flex gap-3 ${
				pathname === `/jobs/${data.id}` && "bg-blue-50"
			} hover:bg-neutral-100 flex-1 cursor-pointer`}
		>
			<div className="m-3 w-14 h-14 bg-gray-200 grid place-items-center">
				<BsBuilding size={35} className="text-gray-500" />
			</div>

			<div className="border-b-[1px] flex-1 border-gray-200 border-r-[1px] border-r-gray-300  py-3">
				<h2 className="font-semibold text-base text-primary">
					{data.title}
				</h2>
				<p className="mt-1">${data.salary}</p>
				<p className="opacity-60">{data.location}</p>

				<p className="mt-4 text-[12px] opacity-60">{data.need_on}</p>
			</div>
		</div>
	)
}
