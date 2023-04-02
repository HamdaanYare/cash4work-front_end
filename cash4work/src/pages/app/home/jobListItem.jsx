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
      className={`flex gap-4 p-4 cursor-pointer transition-colors duration-300 ${
        pathname === `/jobs/${data.id}` ? "bg-blue-100" : "hover:bg-gray-100"
      }`}
    >
      <div className="w-14 h-14 bg-white grid place-items-center rounded-lg border border-gray-300">
        <JobIcon title={data.title} />
      </div>

      <div className="flex flex-col gap-1.5 flex-grow">
        <h2 className="font-semibold text-base text-primary">{data.title}</h2>
        <p className="text-sm">${data.salary}</p>
        <p className="text-sm text-opacity-60">{data.location}</p>

        <p className="text-xs text-opacity-60 mt-2">
          {moment(data?.need_on).format('YYYY-MM-DD hh:mm')}
        </p>
      </div>
    </div>
	)
}
