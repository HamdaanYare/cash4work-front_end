import React from "react"
import { useLocation } from "react-router-dom"
import JobListItem from "./jobListItem"

const DATA = [
	{
		id: "1",
		title: "Remote Front-End Developer",
		organization: "Turing",
		location: "Toronto, Canada (Remote)",
		datePosted: "1 week ago",
		description:
			"A rapidly-growing company that is providing cloud-based software services to clients so they may generate and use evidence- and science-based backing for their products at launch and throughout the product life cycle, is looking for a Front-End Developer. The selected candidate will be responsible for integrating front-end elements with server-side logic and functionalities. The company has efficiently provided their world-class solutions to clients from the pharmaceutical, biotech, medical device, animal health, and nutrition industries. This is a great opportunity for developers to showcase their talent and work on building cutting-edge solutions.",
		jobResponsibilities: [
			"Enhance the overall user experience of the application",
			"Define and communicate technical and design requirements",
			"Fix bugs and bring innovative solutions to the table",
			"Develop and enhance the front-end part of the company's application with a focus on performance",
		],
		jobRequirements: [
			"Bachelor's/Master's degree in Engineering, Computer Science (or equivalent experience)",
			"At least 3+ years of relevant experience as a front-end developer",
			"Extensive experience working with JavaScript ES6",
			"Excellent communication and collaboration skills",
			"Fluent in spoken and written English",
		],
		numberOfApplicants: 63,
	},
	{
		id: "2",
		title: "Internet Safety Evaluator - English (Work-from-home)",
		organization: "TELUS International AI Data Solutions",
		location: "Canada (Remote)",
		datePosted: "1 week ago",
		description:
			"A rapidly-growing company that is providing cloud-based software services to clients so they may generate and use evidence- and science-based backing for their products at launch and throughout the product life cycle, is looking for a Front-End Developer. The selected candidate will be responsible for integrating front-end elements with server-side logic and functionalities. The company has efficiently provided their world-class solutions to clients from the pharmaceutical, biotech, medical device, animal health, and nutrition industries. This is a great opportunity for developers to showcase their talent and work on building cutting-edge solutions.",
		jobResponsibilities: [
			"Enhance the overall user experience of the application",
			"Define and communicate technical and design requirements",
			"Fix bugs and bring innovative solutions to the table",
			"Develop and enhance the front-end part of the company's application with a focus on performance",
		],
		jobRequirements: [
			"Bachelor's/Master's degree in Engineering, Computer Science (or equivalent experience)",
			"At least 3+ years of relevant experience as a front-end developer",
			"Extensive experience working with JavaScript ES6",
			"Excellent communication and collaboration skills",
			"Fluent in spoken and written English",
		],
		numberOfApplicants: 63,
	},
	{
		id: "3",
		title: "Senior React Native Engineer",
		organization: "Chipper Cash",
		location: "Canada (Remote)",
		datePosted: "1 week ago",
		description:
			"A rapidly-growing company that is providing cloud-based software services to clients so they may generate and use evidence- and science-based backing for their products at launch and throughout the product life cycle, is looking for a Front-End Developer. The selected candidate will be responsible for integrating front-end elements with server-side logic and functionalities. The company has efficiently provided their world-class solutions to clients from the pharmaceutical, biotech, medical device, animal health, and nutrition industries. This is a great opportunity for developers to showcase their talent and work on building cutting-edge solutions.",
		jobResponsibilities: [
			"Enhance the overall user experience of the application",
			"Define and communicate technical and design requirements",
			"Fix bugs and bring innovative solutions to the table",
			"Develop and enhance the front-end part of the company's application with a focus on performance",
		],
		jobRequirements: [
			"Bachelor's/Master's degree in Engineering, Computer Science (or equivalent experience)",
			"At least 3+ years of relevant experience as a front-end developer",
			"Extensive experience working with JavaScript ES6",
			"Excellent communication and collaboration skills",
			"Fluent in spoken and written English",
		],
		numberOfApplicants: 63,
	},
	{
		id: "4",
		title: "Vue.js Developer",
		organization: "Distributed",
		location: "Remote",
		datePosted: "2 week ago",
		description:
			"A rapidly-growing company that is providing cloud-based software services to clients so they may generate and use evidence- and science-based backing for their products at launch and throughout the product life cycle, is looking for a Front-End Developer. The selected candidate will be responsible for integrating front-end elements with server-side logic and functionalities. The company has efficiently provided their world-class solutions to clients from the pharmaceutical, biotech, medical device, animal health, and nutrition industries. This is a great opportunity for developers to showcase their talent and work on building cutting-edge solutions.",
		jobResponsibilities: [
			"Enhance the overall user experience of the application",
			"Define and communicate technical and design requirements",
			"Fix bugs and bring innovative solutions to the table",
			"Develop and enhance the front-end part of the company's application with a focus on performance",
		],
		jobRequirements: [
			"Bachelor's/Master's degree in Engineering, Computer Science (or equivalent experience)",
			"At least 3+ years of relevant experience as a front-end developer",
			"Extensive experience working with JavaScript ES6",
			"Excellent communication and collaboration skills",
			"Fluent in spoken and written English",
		],
		numberOfApplicants: 63,
	},
	{
		id: "5",
		title: "Software Engineer",
		organization: "Microsoft",
		location: "Toronto, Canada (Remote)",
		datePosted: "1 week ago",
		description:
			"A rapidly-growing company that is providing cloud-based software services to clients so they may generate and use evidence- and science-based backing for their products at launch and throughout the product life cycle, is looking for a Front-End Developer. The selected candidate will be responsible for integrating front-end elements with server-side logic and functionalities. The company has efficiently provided their world-class solutions to clients from the pharmaceutical, biotech, medical device, animal health, and nutrition industries. This is a great opportunity for developers to showcase their talent and work on building cutting-edge solutions.",
		jobResponsibilities: [
			"Enhance the overall user experience of the application",
			"Define and communicate technical and design requirements",
			"Fix bugs and bring innovative solutions to the table",
			"Develop and enhance the front-end part of the company's application with a focus on performance",
		],
		jobRequirements: [
			"Bachelor's/Master's degree in Engineering, Computer Science (or equivalent experience)",
			"At least 3+ years of relevant experience as a front-end developer",
			"Extensive experience working with JavaScript ES6",
			"Excellent communication and collaboration skills",
			"Fluent in spoken and written English",
		],
		numberOfApplicants: 63,
	},
	{
		id: "6",
		title: "Laravel Developer",
		organization: "Gratitude India",
		location: "Canada (Remote)",
		datePosted: "3 week ago",
		description:
			"A rapidly-growing company that is providing cloud-based software services to clients so they may generate and use evidence- and science-based backing for their products at launch and throughout the product life cycle, is looking for a Front-End Developer. The selected candidate will be responsible for integrating front-end elements with server-side logic and functionalities. The company has efficiently provided their world-class solutions to clients from the pharmaceutical, biotech, medical device, animal health, and nutrition industries. This is a great opportunity for developers to showcase their talent and work on building cutting-edge solutions.",
		jobResponsibilities: [
			"Enhance the overall user experience of the application",
			"Define and communicate technical and design requirements",
			"Fix bugs and bring innovative solutions to the table",
			"Develop and enhance the front-end part of the company's application with a focus on performance",
		],
		jobRequirements: [
			"Bachelor's/Master's degree in Engineering, Computer Science (or equivalent experience)",
			"At least 3+ years of relevant experience as a front-end developer",
			"Extensive experience working with JavaScript ES6",
			"Excellent communication and collaboration skills",
			"Fluent in spoken and written English",
		],
		numberOfApplicants: 63,
	},
	{
		id: "7",
		title: "Python Developer",
		organization: "Talent500",
		location: "Canada (Remote)",
		datePosted: "1 month ago",
		description:
			"A rapidly-growing company that is providing cloud-based software services to clients so they may generate and use evidence- and science-based backing for their products at launch and throughout the product life cycle, is looking for a Front-End Developer. The selected candidate will be responsible for integrating front-end elements with server-side logic and functionalities. The company has efficiently provided their world-class solutions to clients from the pharmaceutical, biotech, medical device, animal health, and nutrition industries. This is a great opportunity for developers to showcase their talent and work on building cutting-edge solutions.",
		jobResponsibilities: [
			"Enhance the overall user experience of the application",
			"Define and communicate technical and design requirements",
			"Fix bugs and bring innovative solutions to the table",
			"Develop and enhance the front-end part of the company's application with a focus on performance",
		],
		jobRequirements: [
			"Bachelor's/Master's degree in Engineering, Computer Science (or equivalent experience)",
			"At least 3+ years of relevant experience as a front-end developer",
			"Extensive experience working with JavaScript ES6",
			"Excellent communication and collaboration skills",
			"Fluent in spoken and written English",
		],
		numberOfApplicants: 63,
	},
	{
		id: "8",
		title: "Remote Front-End Developer",
		organization: "Turing",
		location: "Toronto, Toronto, Canada (Remote)",
		datePosted: "1 week ago",
		description:
			"A rapidly-growing company that is providing cloud-based software services to clients so they may generate and use evidence- and science-based backing for their products at launch and throughout the product life cycle, is looking for a Front-End Developer. The selected candidate will be responsible for integrating front-end elements with server-side logic and functionalities. The company has efficiently provided their world-class solutions to clients from the pharmaceutical, biotech, medical device, animal health, and nutrition industries. This is a great opportunity for developers to showcase their talent and work on building cutting-edge solutions.",
		jobResponsibilities: [
			"Enhance the overall user experience of the application",
			"Define and communicate technical and design requirements",
			"Fix bugs and bring innovative solutions to the table",
			"Develop and enhance the front-end part of the company's application with a focus on performance",
		],
		jobRequirements: [
			"Bachelor's/Master's degree in Engineering, Computer Science (or equivalent experience)",
			"At least 3+ years of relevant experience as a front-end developer",
			"Extensive experience working with JavaScript ES6",
			"Excellent communication and collaboration skills",
			"Fluent in spoken and written English",
		],
		numberOfApplicants: 63,
	},
]

export default function JobsSidebar() {
	const { pathname } = useLocation()
	const pathReqExp = /^\/jobs\/\w{1,}$/

	return (
		<div
			className={`${
				pathReqExp.test(pathname) ? "hidden" : "flex"
			} w-full bg-white border-[1px] border-r-0 border-gray-300 overflow-hidden flex-col md:rounded-tl-xl md:w-[40%] md:flex`}
		>
			<div className="bg-primary text-white p-3">
				<h2 className="text-base">Jobs based on your profile</h2>
				<p className="text-[12px]">{DATA.length} results</p>
			</div>

			<div className="h-full overflow-y-scroll flex-1">
				{DATA.map((job) => (
					<JobListItem key={job.id} data={job} />
				))}
			</div>
		</div>
	)
}
