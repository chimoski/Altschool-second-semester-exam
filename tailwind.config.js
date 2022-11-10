/** @type {import('tailwindcss').Config} */
module.exports = {
	darkMode: "class",
	content: ["./src/**/*.{js,jsx,ts,tsx}"],
	theme: {
		container : {
			center : true,
			padding : {
				DEFAULT : "1rem",
				sm : "1rem",
				md : "2rem",
				lg : "3rem",
				xl : "4rem",
				"2xl" : "5rem"
			}
		},
		extend: {
			colors : {
				primary : "#090C9B"
			},
			transitionProperty : {
				"left" : "left",
				"right" : "right",
				"top" : "top",
				"bottom" : "bottom"
			}
		},
	},
	plugins: [],
};
