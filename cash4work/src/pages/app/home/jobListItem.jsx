import React from "react"
import { BsBuilding } from "react-icons/bs"
import { FaDog, FaHardHat, FaUserNurse, FaChalkboardTeacher, FaTruckMoving } from 'react-icons/fa';
import { IoMdConstruct } from "react-icons/io"
import { MdCleaningServices, MdGrass } from "react-icons/md"
import { useLocation, useNavigate } from "react-router-dom"
import moment from "moment"

const keywordToIcon = {
	dog: FaDog,
	construction: IoMdConstruct,
	nurse: FaUserNurse,
	cleaning: MdCleaningServices,
	cleaner: MdCleaningServices,
	truck: FaTruckMoving,
	moving: FaTruckMoving,
	grass: MdGrass,
	lawn: MdGrass,
	teacher: FaChalkboardTeacher,
	tutor: FaChalkboardTeacher,
  };
  function getIconByTitle(title) {
	// Convert the title to lowercase
	const lowerCaseTitle = title.toLowerCase();
  
	// Search for the keyword in the title
	for (const keyword in keywordToIcon) {
	  if (lowerCaseTitle.includes(keyword)) {
		return keywordToIcon[keyword];
	  }
	}
  
	// Return null if no matching keyword is found
	return null;
  }
  function JobIcon({ title }) {
	const Icon = getIconByTitle(title);
	return Icon ? <Icon size={35} className="text-gray-500"/> : <BsBuilding size={35} className="text-gray-500" />;
  }
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
				<JobIcon title={data.title} />
			</div>

			<div className="border-b-[1px] flex-1 border-gray-200 border-r-[1px] border-r-gray-300  py-3">
				<h2 className="font-semibold text-base text-primary">
					{data.title}
				</h2>
				<p className="mt-1">${data.salary}</p>
				<p className="opacity-60">{data.location}</p>

				<p className="mt-4 text-[12px] opacity-60">{moment(data?.need_on).format('YYYY-MM-DD hh:mm')}</p>
			</div>
		</div>
	)
}
