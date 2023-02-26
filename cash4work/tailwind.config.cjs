/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			colors: {
				primary: "#0A65C2",
				tranparentDark: "rgba(0, 0, 0, 0.6)",
			},
		},
	},
	plugins: [],
}
