import React from "react"
import MessengerSidebar from "./messengerSidebar"
import { Outlet } from "react-router-dom"

 function Messenger() {
	return (
		<div
			style={{ height: "calc(100vh - 64px)" }}
			className="overflow-hidden flex flex-col text-sm"
		>
			<main className="w-full overflow-hidden flex flex-1 md:mx-2 lg:mx-0 md:mt-6">
				<MessengerSidebar />
				<Outlet />
			</main>
		</div>
	)
}
export default Messenger
