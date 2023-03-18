import {
	BrowserRouter as Router,
	Navigate,
	Route,
	Routes,
} from "react-router-dom"
import {
	Contact,
	About,
	Service,
	Home,
	Login,
	NotFound,
	PostJob,
	Messenger1,
	Resume,
	Messenger,
	Signup,
	CreateAd
} from "./pages"
import JobDetails from "./pages/app/home/jobDetails"
import MessengerDetails from "./pages/app/home/messengerDetails"
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

					<Route path="/Messenger1" element={<Messenger1 />}>
						<Route path=":id" element={<MessengerDetails />} />
					</Route>
					



					<Route path="about" element={<About />} /> 
					<Route path="service" element={<Service />} /> 
					<Route path="post-job" element={<PostJob />} />
					<Route path="contact" element={<Contact />} />
					<Route path="resume" element={<Resume />} /> 
					<Route path="createad" element={<CreateAd />} /> 
					<Route path="Messenger" element={<Messenger />} /> 


					<Route path="/login" element={<Login />} />
					<Route path="/signup" element={<Signup />} />

					<Route path="*" element={<NotFound />} />
				</Route>
			</Routes>
		</Router>
	)
}
