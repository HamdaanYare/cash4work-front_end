import React from "react"
import JobsSidebar from "./jobsSidebar"
import { Outlet } from "react-router-dom"

function Home() {
	return (
		<div
			style={{ height: "calc(100vh - 64px)" }}
			className="overflow-hidden flex flex-col text-sm"
		>
			<main className="w-full overflow-hidden flex flex-1 md:mx-2 lg:mx-0 md:mt-6">
				<JobsSidebar />
				<Outlet />
			</main>
		</div>
	)
}

export default Home
