import React, {useState} from "react"
import { FaBriefcase } from "react-icons/fa"
import { BsFillPersonFill } from "react-icons/bs"
import { FiSearch } from "react-icons/fi"
import { Link, useLocation } from "react-router-dom"
import { useAuthContext } from "../context"


export default function Navbar() {
	const { pathname } = useLocation()
	const { logout } = useAuthContext()

	const [isOpen, setIsOpen] = useState(false);

  function toggleMenu() {
    setIsOpen(!isOpen);
  }




	return (
		<nav className="bg-white h-16 p-2 shadow-md shadow-gray-100">
			<div className="w-full max-w-6xl mx-auto flex items-center justify-between">
				<Link
					to="/jobs"
					className="flex items-center gap-3 cursor-pointer"
				>
					<FaBriefcase size={34} className="text-primary" />
					<span className="text-xl font-semibold text-neutral-600">
						Cash4Work
					</span>
				</Link>

				{/* {pathname.includes("/jobs") && (
					<div className="bg-gray-100 px-6 py-3 rounded-lg w-full max-w-sm items-center hidden md:flex">
						<input
							type="text"
							placeholder="Search"
							className="bg-transparent w-full outline-none placeholder:text-darkGrey placeholder:text-sm"
						/>
						<div>
							<FiSearch />
						</div>
					</div>
				)} */}

				<div className="flex items-center gap-4">
					<div className="mr-8 flex gap-8">
						<Link className="text-primary" to="/post-job">
							Post Job
						</Link>
						<Link className="text-primary" to="/resume">
							Resume
						</Link>
						<Link className="text-primary" to="/contact">
							Contact
						</Link>
						<Link className="text-primary" to="/About">
							About
						</Link>
						<Link className="text-primary" to="/Service">
							Service
						</Link>
						<Link className="text-primary" to="/CreateAd">
							CreateAd
						</Link>
						<Link className="text-primary" to="/Chat">
							Chat
						</Link>
						<Link className="text-primary" to="/Messenger">
							Messenger
						</Link>
					</div>

					<span
						onClick={toggleMenu}
						className="w-10 h-10 grid place-items-center rounded-full bg-neutral-200 cursor-pointer hover:bg-neutral-300"
					>
						<BsFillPersonFill size={24} className="text-gray-500" />
		
					</span>
					{isOpen && (
						<div className="dropdown-menu-list">
							<button onClick={logout}>Logout</button>
						
						</div>
					)}
				</div>
			</div>
		</nav>
	)
}
