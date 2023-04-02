import React from "react";
import { useLocation } from "react-router-dom";
import { useAuthContext } from "../../../context";
import { FiUser } from "react-icons/fi";

const MessengerListItem = React.memo(({ data, handleClick }) => {
  const { pathname } = useLocation();
  const { user } = useAuthContext();
	return (
		<div
			onClick={handleClick}
			className={`flex gap-3 ${pathname === `/Messenger/${data.conversation_id}` && "bg-blue-50"
				} hover:bg-neutral-100 flex-1 cursor-pointer`}
		>
			<div className="m-3 w-14 h-14 bg-gray-200 grid place-items-center">
				<FiUser className="text-gray-500" size={35}/>
			</div>

			<div className="border-b-[1px] flex-1 border-gray-200 border-r-[1px] border-r-gray-300  py-3">
				<h2 className="font-semibold text-base text-primary">
					{user.id === data.applied_by ? data.posted_by_fname : data.applied_by_fname} 
				</h2>
				<p className="opacity-60">
					{ data.title }
				</p>
				{ <p className="opacity-60">{data.location}</p> }

				{ <p className="mt-4 text-[12px] opacity-60">{data.datePosted}</p> }
			</div>
		</div>
	)
});

export default MessengerListItem;
