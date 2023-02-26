import {
	BrowserRouter as Router,
	Navigate,
	Route,
	Routes,
} from "react-router-dom"
import { Home, Login, NotFound, PostJob, Signup, About, Contact, Service, FileUploadForm } from "./pages"
import JobDetails from "./pages/app/home/jobDetails"
import RequireAuth from "./pages/requireAuth"


export default function App() {
	return (
		<Router>
			<Routes>
				<Route element={<RequireAuth />}>
					<Route path="/" element={<Navigate to="/jobs" replace />} />
					<Route path="/jobs" element={<Home />}>
						<Route path=":id" element={<JobDetails />} />
					</Route>
					<Route path="post-job" element={<PostJob />} />

					<Route path="/login" element={<Login />} />
					<Route path="/signup" element={<Signup />} />

					<Route path="/Contact" element={<Contact />} />
					<Route path="/service" element={<Service />} />
					<Route path="/resume" element={<FileUploadForm />} />
					<Route path="/About" element={<About />} />
					<Route path="/Service" element={<Service />} />





					<Route path="*" element={<NotFound />} />
				</Route>
			</Routes>
		</Router>
	)
}
