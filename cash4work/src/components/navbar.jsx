import React, { useState, useEffect, useRef } from "react";
import { FaBriefcase } from "react-icons/fa";
import { BsFillPersonFill } from "react-icons/bs";
import { Link, useLocation } from "react-router-dom";
import { useAuthContext } from "../context";
import { createPopper } from "@popperjs/core";

export default function Navbar() {
	const { logout } = useAuthContext();

	const [dropdownPopoverShow, setDropdownPopoverShow] = useState(false);
	const btnDropdownRef = useRef();
	const popoverDropdownRef = useRef();
	const openDropdownPopover = () => {
		createPopper(btnDropdownRef.current, popoverDropdownRef.current, {
			placement: "bottom-start",
		});
		setDropdownPopoverShow(true);
	};
	const closeDropdownPopover = () => {
		setDropdownPopoverShow(false);
	};
	const handleClickOutside = (event) => {
    if (btnDropdownRef.current && !btnDropdownRef.current.contains(event.target) && !popoverDropdownRef.current.contains(event.target)  ) {
      closeDropdownPopover();
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
	return (
		<nav className="bg-white h-16 p-2 shadow-md shadow-gray-100">
			<div className="w-full max-w-6xl mx-auto flex items-center justify-between">
				<Link to="/jobs" className="flex items-center gap-3 cursor-pointer">
					<FaBriefcase size={34} className="text-primary" />
					<span className="text-xl font-semibold text-neutral-600">Cash4Work</span>
				</Link>

				<div className="flex items-center gap-4">
					<div className="mr-8 flex gap-8">
						<Link className="text-primary" to="/post-job">
							Post Job
						</Link>

						<Link className="text-primary" to="/post-worker">
							Post Worker
						</Link>
						<Link className="text-primary" to="/workers">
							Workers
						</Link>
						
						<Link className="text-primary" to="/contact">
							Contact
						</Link>
						<Link className="text-primary" to="/About">
							About
						</Link>
						<Link className="text-primary" to="/messenger">
							Messenger
						</Link>
					</div>

					<span
						ref={btnDropdownRef}
						onClick={() => {
							dropdownPopoverShow ? closeDropdownPopover() : openDropdownPopover();
						}}
						className="w-10 h-10 grid place-items-center rounded-full bg-neutral-200 cursor-pointer hover:bg-neutral-300">
						<BsFillPersonFill size={24} className="text-gray-500" />
					</span>
					<div
						ref={popoverDropdownRef}
						className={
							(dropdownPopoverShow ? "block " : "hidden ") +
							"bg-white text-base z-50 float-left py-2 list-none text-left rounded shadow-lg mt-1"
						}
						style={{ minWidth: "12rem" }}>
						<Link to="Profile"
							className="text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-slate-700"
							onClick={closeDropdownPopover}
						>
							Profile
						</Link>
						<Link to="/AppliedJobs"
							className="text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-slate-700"
							onClick={closeDropdownPopover}
						>
							Applied Jobs
						</Link>
						<a
							href="#pablo"
							className="text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-slate-700"							
							onClick={(e) => e.preventDefault()}
						>
							Something else here
						</a>
						<div className="h-0 my-2 border border-solid border-t-0 border-slate-800 opacity-25" />
						<Link
							className="text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-slate-700"
							onClick={logout}
						>
							Logout
						</Link>
					</div>
				</div>
			</div>
		</nav>
	);
}
